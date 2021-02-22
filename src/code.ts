import NODE from "./_/NODE";
import CONFIG from "./_/CONFIG";
import COMPONENT from "./_/COMPONENT";
import ACSS from "./_/ACSS";
import DOM from "./_/render/DOM";

const API = {
    tabIndex: 0,
    getSelection: () => {
        const selection = figma.currentPage.selection;
        if (!selection.length) {
            // 没有选择任何元素
            figma.ui.postMessage({noSelection: true});
            return null;
        }
        return selection;
    },
    onTabChange: (index) => {
        const beforeIndex = API.tabIndex;
        API.tabIndex = index;

        // 如果只是在 HTML 和 ACSS 之前切换
        if ((beforeIndex === 0 || beforeIndex === 1) && (index === 0 || index === 1)) {
            return;
        }

        const actionMap = ['runHome', 'runHome', 'runToken', 'runConfig'];
        const action = actionMap[index];
        if (!action) {
            return;
        }
        API[action]();
    },
    onSelectionChange: () => {
        const actionMap = ['runHome', 'runHome', 'runToken', ''];
        const action = actionMap[API.tabIndex];
        if (!action) {
            return;
        }
        API[action]();
    },
    runHome: () => {
        const selection = API.getSelection();
        if (!selection) {
            return;
        }
        ACSS.init();
        // @ts-ignore
        const Info = NODE.getNodesInfo(selection);
        // console.log(Info);
        const isJSX = CONFIG.isJSX();
        figma.ui.postMessage({
            getHTML: DOM.render(Info, isJSX),
            getCSS: ACSS.getString(),
            isJSX,
            noSelection: false
        });
    },
    runConfig: () => {
        figma.ui.postMessage({
            getConfig: CONFIG.getAll()
        });
    },
    runToken: () => {
        const [selection] = API.getSelection() || [];
        if (!selection) {
            return;
        }
        const typeMap = ['fill', 'text', 'stroke', 'effect', 'grid'];
        const token = CONFIG.getToken() || {};
        // 如果是组件则不需要显示任何其它的属性
        if (COMPONENT.isComponent(selection)) {
            //@ts-ignore
            const {id, name} = COMPONENT.getMainComponent(selection);
            const componentToken = {
                name,
                type: 'Component',
                ...token[id]
            };
            figma.ui.postMessage({
                gotToken: {
                    type: selection.type,
                    token: {
                        [id]: componentToken
                    }
                },
                noSelection: false
            });
            return '';
        }
        const matchToken = {};
        // console.log(selection);
        //@ts-ignore
        [selection.fillStyleId, selection.textStyleId, selection.strokeStyleId, selection.effectStyleId, selection.gridStyleId].forEach((item, key) => {
            if (!item) {
                return '';
            }
            const getStyle = figma.getStyleById(item);
            const {id, name} = getStyle || {};
            if (!id) {
                return '';
            }
            matchToken[id] = {
                ...token[id],
                name,
                type: typeMap[key]
            }
        });
        figma.ui.postMessage({
            gotToken: {
                type: selection.type,
                token: matchToken
            }, noSelection: false
        });
    },
    onmessage: (msg = {}) => {
        // @ts-ignore
        const {type = null, value = null} = msg;
        if (type === null) {
            return;
        }
        const [name, action] = type.split('.');
        // console.log('API onmessage', name, action, value);
        if (name === 'API' && (action in API)) {
            API[action](value);
        } else if (name === 'CONFIG' && (action in CONFIG)) {
            CONFIG[action](value);
            if (action === 'changeJSX') {
                API.runHome();
            } else if (action === 'appendToken') {
                API.runToken();
            } else {
                API.runConfig();
            }
        }
    }
}

// This plugin will open a window to prompt the user to enter a number, and
// it will then create that many rectangles on the screen.

// This file holds the main code for the plugins. It has access to the *document*.
// You can access browser APIs in the <script> tag inside "ui.html" which has a
// full browser environment (see documentation).
CONFIG.init().then(() => {
    // This shows the HTML page in "ui.html".
    figma.showUI(__html__, {width: 400, height: 600});
    API.runHome();
    figma.on("selectionchange", () => {
        API.onSelectionChange();
    });
    // @ts-ignore
    figma.ui.onmessage = API.onmessage;
});

