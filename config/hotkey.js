const hotkeys = {
    KEY_C:     {code: 'C',     windowFocusNeeded: true},
    KEY_M:     {code: 'M',     windowFocusNeeded: true},
    KEY_G:     {code: 'G',     windowFocusNeeded: true},
    KEY_LEFT:  {code: 'Left',  windowFocusNeeded: true},
    KEY_RIGHT: {code: 'Right', windowFocusNeeded: true},
};

for (const _keyName in hotkeys) {
    hotkeys[_keyName].toString = ()=> hotkeys[_keyName].code;
}
module.exports = hotkeys;