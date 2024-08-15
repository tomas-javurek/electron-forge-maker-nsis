"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const maker_base_1 = __importDefault(require("@electron-forge/maker-base"));
const app_builder_lib_1 = require("app-builder-lib");
class MakerNSIS extends maker_base_1.default {
    constructor() {
        super(...arguments);
        this.name = 'nsis';
        this.defaultPlatforms = ['win32'];
    }
    isSupportedOnCurrentPlatform() {
        return process.platform === 'win32';
    }
    async make(options) {
        return (0, app_builder_lib_1.buildForge)(options, { win: [`nsis:${options.targetArch}`] });
    }
}
exports.default = MakerNSIS;
//# sourceMappingURL=MakerNSIS.js.map