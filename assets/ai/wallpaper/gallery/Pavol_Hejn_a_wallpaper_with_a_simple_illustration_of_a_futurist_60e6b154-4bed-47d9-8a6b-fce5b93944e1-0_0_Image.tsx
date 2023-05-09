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
import metadata from './Pavol_Hejn_a_wallpaper_with_a_simple_illustration_of_a_futurist_60e6b154-4bed-47d9-8a6b-fce5b93944e1-0_0.json';
import source from './Pavol_Hejn_a_wallpaper_with_a_simple_illustration_of_a_futurist_60e6b154-4bed-47d9-8a6b-fce5b93944e1-0_0.png';

/**
 * Image of A wallpaper with a simple illustration of a futuristic vehicle, with metallic textures and a dark and moody color scheme.
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function AWallpaperWithASimpleIllustrationOfAFuturist60e6b1544bed47d98a6bFce5b93944e10_0_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A wallpaper with a simple illustration of a futuristic vehicle, with metallic textures and a dark and moody color scheme."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AWallpaperWithASimpleIllustrationOfAFuturist60e6b1544bed47d98a6bFce5b93944e10_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AWallpaperWithASimpleIllustrationOfAFuturist60e6b1544bed47d98a6bFce5b93944e10_0_Image.colorStats = {
    averageColor: Color.fromHex('#0e1925'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#885555'), Color.fromHex('#88ffee')],
    minmaxGreen: [Color.fromHex('#227766'), Color.fromHex('#ffffff')],
    minmaxBlue: [Color.fromHex('#116688'), Color.fromHex('#ffffff')],
    mostFrequentColor: Color.fromHex('#001122'),
    mostSaturatedColor: Color.fromHex('#000011'),
    mostGroupedColor: Color.fromHex('#000011'),
    bottom: {
        averageColor: Color.fromHex('#101c29'),
        lightestColor: Color.fromHex('#ccdddd'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#ccdddd'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#775555'), Color.fromHex('#ccdddd')],
        minmaxGreen: [Color.fromHex('#227766'), Color.fromHex('#110022')],
        minmaxBlue: [Color.fromHex('#224466'), Color.fromHex('#ddccaa')],
        mostFrequentColor: Color.fromHex('#001122'),
        mostSaturatedColor: Color.fromHex('#001122'),
        mostGroupedColor: Color.fromHex('#000011'),
    },
} satisfies IImageColorStats;
