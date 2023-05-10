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
import metadata from './Pavol_Hejn_a_wallpaper_featuring_an_abstract_illustration_of_a__9f77f778-1bd7-4801-ad0e-9756122a1b43-0_0.json';
import source from './Pavol_Hejn_a_wallpaper_featuring_an_abstract_illustration_of_a__9f77f778-1bd7-4801-ad0e-9756122a1b43-0_0.png';

/**
 * Image of A wallpaper featuring an abstract illustration of a futuristic cityscape, with glowing lights and a dark and moody color scheme, set against a gradient background.
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function AWallpaperFeaturingAnAbstractIllustrationOfA9f77f7781bd74801Ad0e9756122a1b430_0_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A wallpaper featuring an abstract illustration of a futuristic cityscape, with glowing lights and a dark and moody color scheme, set against a gradient background."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AWallpaperFeaturingAnAbstractIllustrationOfA9f77f7781bd74801Ad0e9756122a1b430_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AWallpaperFeaturingAnAbstractIllustrationOfA9f77f7781bd74801Ad0e9756122a1b430_0_Image.colorStats = {
    averageColor: Color.fromHex('#2f2e48'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#bb3311'), Color.fromHex('#44ffff')],
    minmaxGreen: [Color.fromHex('#44bb99'), Color.fromHex('#ffddff')],
    minmaxBlue: [Color.fromHex('#0044bb'), Color.fromHex('#ffff99')],
    mostFrequentColor: Color.fromHex('#111144'),
    mostSaturatedColor: Color.fromHex('#001122'),
    mostGroupedColor: Color.fromHex('#111133'),
    bottom: {
        averageColor: Color.fromHex('#3d233b'),
        lightestColor: Color.fromHex('#ffffff'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#bb3311'), Color.fromHex('#ddffff')],
        minmaxGreen: [Color.fromHex('#668888'), Color.fromHex('#ffddff')],
        minmaxBlue: [Color.fromHex('#3333aa'), Color.fromHex('#ffff99')],
        mostFrequentColor: Color.fromHex('#111144'),
        mostSaturatedColor: Color.fromHex('#001122'),
        mostGroupedColor: Color.fromHex('#111122'),
    },
} satisfies IImageColorStats;