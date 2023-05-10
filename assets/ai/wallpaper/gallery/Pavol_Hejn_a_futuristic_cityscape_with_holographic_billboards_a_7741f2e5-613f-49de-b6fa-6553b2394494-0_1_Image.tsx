/**
 * 🏭 GENERATED WITH 🖼️ Generate wallpapers library
 * ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
 *    If you want to edit this file:
 *      - Change @generated to @not-generated
 *      - And remove this warning
 *    Then the file will not be re-generated automatically
 */

import Image from 'next/image';
import { Color } from '../../../../src/utils/color/Color';
import { IImageColorStats } from '../../../../src/utils/image/utils/IImageColorStats';
import { IWallpaperMetadata, IWallpaperComponentProps } from '../IWallpaperComponent';
import metadata from './Pavol_Hejn_a_futuristic_cityscape_with_holographic_billboards_a_7741f2e5-613f-49de-b6fa-6553b2394494-0_1.json';
import source from './Pavol_Hejn_a_futuristic_cityscape_with_holographic_billboards_a_7741f2e5-613f-49de-b6fa-6553b2394494-0_1.png';

/**
 * Image of A futuristic cityscape with holographic billboards and flying cars
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function AFuturisticCityscapeWithHolographicBillboardsA7741f2e5613f49deB6fa6553b23944940_1_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A futuristic cityscape with holographic billboards and flying cars"
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AFuturisticCityscapeWithHolographicBillboardsA7741f2e5613f49deB6fa6553b23944940_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AFuturisticCityscapeWithHolographicBillboardsA7741f2e5613f49deB6fa6553b23944940_1_Image.colorStats = {
    averageColor: Color.fromHex('#4b4883'),
    lightestColor: Color.fromHex('#ffeeff'),
    darkestColor: Color.fromHex('#111122'),
    minmaxWhite: [Color.fromHex('#ffeeff'), Color.fromHex('#000033')],
    minmaxRed: [Color.fromHex('#dd1122'), Color.fromHex('#33ccff')],
    minmaxGreen: [Color.fromHex('#558866'), Color.fromHex('#ff44cc')],
    minmaxBlue: [Color.fromHex('#3322bb'), Color.fromHex('#eeff66')],
    mostFrequentColor: Color.fromHex('#001133'),
    mostSaturatedColor: Color.fromHex('#220044'),
    mostGroupedColor: Color.fromHex('#112244'),
    bottom: {
        averageColor: Color.fromHex('#5e3d76'),
        lightestColor: Color.fromHex('#ffeeff'),
        darkestColor: Color.fromHex('#111122'),
        minmaxWhite: [Color.fromHex('#ffeeff'), Color.fromHex('#000033')],
        minmaxRed: [Color.fromHex('#dd1122'), Color.fromHex('#88eeff')],
        minmaxGreen: [Color.fromHex('#558866'), Color.fromHex('#ff44cc')],
        minmaxBlue: [Color.fromHex('#1133aa'), Color.fromHex('#eeff66')],
        mostFrequentColor: Color.fromHex('#001133'),
        mostSaturatedColor: Color.fromHex('#220044'),
        mostGroupedColor: Color.fromHex('#111133'),
    },
} satisfies IImageColorStats;