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
import metadata from './Pavol_Hejn_a_minimalist_wallpaper_with_a_single_line_drawing_of_3d15429c-3bc5-41d1-984f-e15e14713029-0_1.json';
import source from './Pavol_Hejn_a_minimalist_wallpaper_with_a_single_line_drawing_of_3d15429c-3bc5-41d1-984f-e15e14713029-0_1.png';

/**
 * Image of A minimalist wallpaper with a single line drawing of a cyborg, in a striking color such as bright red or blue.
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function AMinimalistWallpaperWithASingleLineDrawingOf3d15429c3bc541d1984fE15e147130290_1_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A minimalist wallpaper with a single line drawing of a cyborg, in a striking color such as bright red or blue."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AMinimalistWallpaperWithASingleLineDrawingOf3d15429c3bc541d1984fE15e147130290_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AMinimalistWallpaperWithASingleLineDrawingOf3d15429c3bc541d1984fE15e147130290_1_Image.colorStats = {
    averageColor: Color.fromHex('#859ca0'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#110000'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#110000')],
    minmaxRed: [Color.fromHex('#ee0011'), Color.fromHex('#ffffff')],
    minmaxGreen: [Color.fromHex('#44aa88'), Color.fromHex('#ee0011')],
    minmaxBlue: [Color.fromHex('#335588'), Color.fromHex('#ffffcc')],
    mostFrequentColor: Color.fromHex('#88aabb'),
    mostSaturatedColor: Color.fromHex('#cc1100'),
    mostGroupedColor: Color.fromHex('#66aaaa'),
    bottom: {
        averageColor: Color.fromHex('#879b9e'),
        lightestColor: Color.fromHex('#eeeeff'),
        darkestColor: Color.fromHex('#220000'),
        minmaxWhite: [Color.fromHex('#ffffee'), Color.fromHex('#220000')],
        minmaxRed: [Color.fromHex('#ee0011'), Color.fromHex('#22bbdd')],
        minmaxGreen: [Color.fromHex('#44aa88'), Color.fromHex('#ee0011')],
        minmaxBlue: [Color.fromHex('#445588'), Color.fromHex('#ffffdd')],
        mostFrequentColor: Color.fromHex('#88aabb'),
        mostSaturatedColor: Color.fromHex('#cc1100'),
        mostGroupedColor: Color.fromHex('#66aaaa'),
    },
} satisfies IImageColorStats;