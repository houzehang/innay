(function () {

    function boot () {

        var settings = window._CCSettings;
        window._CCSettings = undefined;

        if ( !settings.debug ) {
            var uuids = settings.uuids;

            var rawAssets = settings.rawAssets;
            var assetTypes = settings.assetTypes;
            var realRawAssets = settings.rawAssets = {};
            for (var mount in rawAssets) {
                var entries = rawAssets[mount];
                var realEntries = realRawAssets[mount] = {};
                for (var id in entries) {
                    var entry = entries[id];
                    var type = entry[1];
                    // retrieve minified raw asset
                    if (typeof type === 'number') {
                        entry[1] = assetTypes[type];
                    }
                    // retrieve uuid
                    realEntries[uuids[id] || id] = entry;
                }
            }

            var scenes = settings.scenes;
            for (var i = 0; i < scenes.length; ++i) {
                var scene = scenes[i];
                if (typeof scene.uuid === 'number') {
                    scene.uuid = uuids[scene.uuid];
                }
            }

            var packedAssets = settings.packedAssets;
            for (var packId in packedAssets) {
                var packedIds = packedAssets[packId];
                for (var j = 0; j < packedIds.length; ++j) {
                    if (typeof packedIds[j] === 'number') {
                        packedIds[j] = uuids[packedIds[j]];
                    }
                }
            }
        }

        // init engine
        var onStart = function () {
            if (false) {
                BK.Script.loadlib();
            }

            cc.view.resizeWithBrowserSize(true);

            if (!false && !false) {
                // UC browser on many android devices have performance issue with retina display
                if (cc.sys.os !== cc.sys.OS_ANDROID || cc.sys.browserType !== cc.sys.BROWSER_TYPE_UC) {
                    cc.view.enableRetina(true);
                }

                if (cc.sys.isMobile) {
                    if (settings.orientation === 'landscape') {
                        cc.view.setOrientation(cc.macro.ORIENTATION_LANDSCAPE);
                    }
                    else if (settings.orientation === 'portrait') {
                        cc.view.setOrientation(cc.macro.ORIENTATION_PORTRAIT);
                    }
                    cc.view.enableAutoFullScreen([
                        cc.sys.BROWSER_TYPE_BAIDU,
                        cc.sys.BROWSER_TYPE_WECHAT,
                        cc.sys.BROWSER_TYPE_MOBILE_QQ,
                        cc.sys.BROWSER_TYPE_MIUI,
                    ].indexOf(cc.sys.browserType) < 0);
                }

                // Limit downloading max concurrent task to 2,
                // more tasks simultaneously may cause performance draw back on some android system / brwosers.
                // You can adjust the number based on your own test result, you have to set it before any loading process to take effect.
                if (cc.sys.isBrowser && cc.sys.os === cc.sys.OS_ANDROID) {
                    cc.macro.DOWNLOAD_MAX_CONCURRENT = 2;
                }
            }

            // init assets
            cc.AssetLibrary.init({
                libraryPath: 'http://localhost:3030/libs/classroom/res/import',
                rawAssetsBase: 'http://localhost:3030/libs/classroom/res/raw-',
                rawAssets: settings.rawAssets,
                packedAssets: settings.packedAssets,
                md5AssetsMap: settings.md5AssetsMap
            });

            var launchScene = settings.launchScene;

            // load scene
            cc.director.loadScene(launchScene, null,
                function () {
                    console.log('Success to load scene: ' + launchScene);
                    setTimeout(()=>{
                        window.SCENE_LOADED = true
                        if (window.ON_SCENE_LOADED) {
                            window.ON_SCENE_LOADED()
                        }
                    },0)
                }
            );
        };

        // jsList
        var jsList = settings.jsList;

        if (!false) {
            var bundledScript = settings.debug ? 'src/project.dev.js' : 'src/project.js';
            bundledScript = "http://localhost:3030/libs/classroom/" + bundledScript
            if (jsList) {
                jsList = jsList.map(function (x) {
                    return 'src/' + x;
                });
                jsList.push(bundledScript);
            }
            else {
                jsList = [bundledScript];
            }
        }

        var option = {
            id: 'classroom',
            scenes: settings.scenes,
            debugMode: settings.debug ? cc.DebugMode.INFO : cc.DebugMode.ERROR,
            showFPS: (!false && !false) && settings.debug,
            frameRate: 60,
            jsList: jsList,
            groupList: settings.groupList,
            collisionMatrix: settings.collisionMatrix,
            renderMode: 0
        }

        cc.game.run(option, onStart);
    }

    boot()

})();
