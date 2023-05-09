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
import metadata from './Pavol_Hejn_a_futuristic_cityscape_with_holographic_billboards_a_7741f2e5-613f-49de-b6fa-6553b2394494-0_3.json';
import source from './Pavol_Hejn_a_futuristic_cityscape_with_holographic_billboards_a_7741f2e5-613f-49de-b6fa-6553b2394494-0_3.png';

/**
 * Image of A futuristic cityscape with holographic billboards and flying cars
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function AFuturisticCityscapeWithHolographicBillboardsA7741f2e5613f49deB6fa6553b23944940_3_Image(
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

AFuturisticCityscapeWithHolographicBillboardsA7741f2e5613f49deB6fa6553b23944940_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AFuturisticCityscapeWithHolographicBillboardsA7741f2e5613f49deB6fa6553b23944940_3_Image.colorStats = {
    averageColor: Color.fromHex('#554c79'),
    lightestColor: Color.fromHex('#ffeeff'),
    darkestColor: Color.fromHex('#111111'),
    minmaxWhite: [Color.fromHex('#eeffff'), Color.fromHex('#000022')],
    minmaxRed: [Color.fromHex('#bb4444'), Color.fromHex('#99ffff')],
    minmaxGreen: [Color.fromHex('#449999'), Color.fromHex('#ffddff')],
    minmaxBlue: [Color.fromHex('#114499'), Color.fromHex('#eeffee')],
    mostFrequentColor: Color.fromHex('#333355'),
    mostSaturatedColor: Color.fromHex('#001133'),
    mostGroupedColor: Color.fromHex('#222244'),
    bottom: {
        averageColor: Color.fromHex('#634569'),
        lightestColor: Color.fromHex('#eeccff'),
        darkestColor: Color.fromHex('#111111'),
        minmaxWhite: [Color.fromHex('#eeffff'), Color.fromHex('#000022')],
        minmaxRed: [Color.fromHex('#bb4444'), Color.fromHex('#99ffff')],
        minmaxGreen: [Color.fromHex('#559999'), Color.fromHex('#eeccff')],
        minmaxBlue: [Color.fromHex('#114499'), Color.fromHex('#eeffff')],
        mostFrequentColor: Color.fromHex('#333355'),
        mostSaturatedColor: Color.fromHex('#001133'),
        mostGroupedColor: Color.fromHex('#222244'),
    },
} satisfies IImageColorStats;
