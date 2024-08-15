import MakerBase, { MakerOptions } from '@electron-forge/maker-base';
export default class MakerNSIS extends MakerBase<any> {
    name: string;
    defaultPlatforms: string[];
    isSupportedOnCurrentPlatform(): boolean;
    make(options: MakerOptions): Promise<string[]>;
}
