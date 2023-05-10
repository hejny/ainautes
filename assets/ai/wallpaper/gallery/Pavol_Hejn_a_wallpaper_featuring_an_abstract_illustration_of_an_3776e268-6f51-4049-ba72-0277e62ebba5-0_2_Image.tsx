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
import metadata from './Pavol_Hejn_a_wallpaper_featuring_an_abstract_illustration_of_an_3776e268-6f51-4049-ba72-0277e62ebba5-0_2.json';
import source from './Pavol_Hejn_a_wallpaper_featuring_an_abstract_illustration_of_an_3776e268-6f51-4049-ba72-0277e62ebba5-0_2.png';

/**
 * Image of A wallpaper featuring an abstract illustration of an AI-powered search engine, with a minimalist and modern design, set against a gradient background.
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function AWallpaperFeaturingAnAbstractIllustrationOfAn3776e2686f514049Ba720277e62ebba50_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A wallpaper featuring an abstract illustration of an AI-powered search engine, with a minimalist and modern design, set against a gradient background."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AWallpaperFeaturingAnAbstractIllustrationOfAn3776e2686f514049Ba720277e62ebba50_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AWallpaperFeaturingAnAbstractIllustrationOfAn3776e2686f514049Ba720277e62ebba50_2_Image.colorStats = {
    averageColor: Color.fromHex('#333f81'),
    lightestColor: Color.fromHex('#ee11ff'),
    darkestColor: Color.fromHex('#001111'),
    minmaxWhite: [Color.fromHex('#aadddd'), Color.fromHex('#000011')],
    minmaxRed: [Color.fromHex('#ff2233'), Color.fromHex('#00ffff')],
    minmaxGreen: [Color.fromHex('#22ee77'), Color.fromHex('#ee11ff')],
    minmaxBlue: [Color.fromHex('#1111dd'), Color.fromHex('#ff9966')],
    mostFrequentColor: Color.fromHex('#333377'),
    mostSaturatedColor: Color.fromHex('#004477'),
    mostGroupedColor: Color.fromHex('#113355'),
    bottom: {
        averageColor: Color.fromHex('#173860'),
        lightestColor: Color.fromHex('#bbbbff'),
        darkestColor: Color.fromHex('#001111'),
        minmaxWhite: [Color.fromHex('#bbbbff'), Color.fromHex('#000011')],
        minmaxRed: [Color.fromHex('#cc3344'), Color.fromHex('#00ffbb')],
        minmaxGreen: [Color.fromHex('#00aa55'), Color.fromHex('#cc33ee')],
        minmaxBlue: [Color.fromHex('#1111dd'), Color.fromHex('#66ffbb')],
        mostFrequentColor: Color.fromHex('#333377'),
        mostSaturatedColor: Color.fromHex('#004477'),
        mostGroupedColor: Color.fromHex('#113355'),
    },
} satisfies IImageColorStats;