export function makeid(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

export function initSheetByDemoNew(demo, setting) {
    const {toolbar, refs} = setting
    const {univerSheetCustom, CommonPluginData, UniverCore} = UniverPreactTs
    const {
        DEFAULT_WORKBOOK_DATA_DEMO1,
        DEFAULT_WORKBOOK_DATA_DEMO2,
        DEFAULT_WORKBOOK_DATA_DEMO3,
        DEFAULT_WORKBOOK_DATA_DEMO4
    } = CommonPluginData

    const demoInfo = {
        DEMO1: DEFAULT_WORKBOOK_DATA_DEMO1,
        DEMO2: DEFAULT_WORKBOOK_DATA_DEMO2,
        DEMO3: DEFAULT_WORKBOOK_DATA_DEMO3,
        DEMO4: DEFAULT_WORKBOOK_DATA_DEMO4
    }
    const uiSheetsConfig = {
        container: refs,
        layout: {
            sheetContainerConfig: {
                infoBar: false,
                formulaBar: false,
                toolbar,
                sheetBar: false,
                countBar: false,
                rightMenu: false
            }
        }
    }
    const baseSheetsConfig = {
        selections: {
            'sheet-01': [
                {
                    selection: {
                        startRow: 11,
                        endRow: 11,
                        startColumn: 1,
                        endColumn: 1
                    },
                    cell: {
                        row: 11,
                        column: 1
                    }
                }
            ]
        }
    }

    const coreConfig = UniverCore.Tools.deepClone(demoInfo[demo])

    coreConfig.id = makeid(6)
    coreConfig.sheetOrder = []
    univerSheetCustom({
        coreConfig,
        uiSheetsConfig,
        baseSheetsConfig
    })
}

export function initSheetNew(setting) {
    const {toolbar, refs} = setting
    let cellData = {}

    cellData = {
        0: {
            0: {
                m: '',
                v: ''
            }
        }
    }


    const {univerSheetCustom, CommonPluginData} = UniverPreactTs
    const {DEFAULT_WORKBOOK_DATA} = CommonPluginData
    const uiSheetsConfig = {
        container: refs,
        layout: {
            sheetContainerConfig: {
                infoBar: false,
                formulaBar: false,
                toolbar,
                sheetBar: false,
                countBar: false,
                rightMenu: false
            }
        },
    }

    const baseSheetsConfig = {
        selections: {
            'sheet-01': [
                {
                    selection: {
                        startRow: 0,
                        endRow: 1,
                        startColumn: 0,
                        endColumn: 1
                    },
                    cell: {
                        row: 0,
                        column: 0
                    }
                }
            ]
        }
    }

    let columnCount = 13
    if (window.innerWidth < 1366) {
        columnCount = 7
    }
    const config = {
        id: makeid(6),
        styles: null,
        namedRanges: null,
        sheetOrder: [],
        sheets: {
            'sheet-01': {
                type: 0,
                id: 'sheet-01',
                name: 'sheet1',
                columnCount,
                status: 1,
                cellData
            }
        }
    }
    const coreConfig = Object.assign({}, DEFAULT_WORKBOOK_DATA, config)

    univerSheetCustom({
        coreConfig,
        uiSheetsConfig,
        baseSheetsConfig
    })
}

export function initDocNew(setting) {
    const {toolbar, refs} = setting
    const {univerDocCustom, UniverCore, CommonPluginData} = UniverPreactTs

    const {DEFAULT_DOCUMENT_DATA_EN} = CommonPluginData

    const coreConfig = UniverCore.Tools.deepClone(DEFAULT_DOCUMENT_DATA_EN)
    coreConfig.id = makeid(6)

    const uiDocsConfig = {
        container: refs,
        layout: {
            docContainerConfig: {
                innerRight: false,
                outerLeft: false,
                infoBar: false,
                toolbar
            }
        },
    }

    const univerdoc = univerDocCustom({
        coreConfig,
        uiDocsConfig
    })

    window.addEventListener('resize', () => {
        univerdoc._context.getPluginManager().getRequirePluginByName('document').calculatePagePosition();
    });
}

export function initSlideNew(setting) {
    const {toolbar, refs} = setting
    const {univerSlideCustom, UniverCore, CommonPluginData} = UniverPreactTs
    const {DEFAULT_SLIDE_DATA} = CommonPluginData

    const coreConfig = UniverCore.Tools.deepClone(DEFAULT_SLIDE_DATA)
    coreConfig.id = makeid(6)

    const uiSlidesConfig = {
        container: refs,
        layout: {
            slideContainerConfig: {
                innerLeft: false,
                innerRight: false,
                outerLeft: false,
                infoBar: false,
                toolbar
            }
        },
    }
   let universlide = univerSlideCustom({
        coreConfig,
        uiSlidesConfig
    })

    window.addEventListener('resize', () => {
        universlide._context
            .getPluginManager()
            .getPluginByName('slide')
            .getCanvasView()
            .scrollToCenter()
    });
}

export function initUniverNew(content, setting) {
    switch (content) {
        case 'sheet':
            initSheetNew(setting)
            break;
        case 'doc':
            initDocNew(setting)
            break;
        case 'slide':
            initSlideNew(setting)
            break;
        case 'DEMO1':
        case 'DEMO2':
        case 'DEMO3':
        case 'DEMO4':
            initSheetByDemoNew(content, setting)
            break;
        default:
            break;
    }
}
