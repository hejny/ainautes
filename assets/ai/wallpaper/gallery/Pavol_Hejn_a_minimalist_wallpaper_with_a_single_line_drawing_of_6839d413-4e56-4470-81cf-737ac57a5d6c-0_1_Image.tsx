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
import metadata from './Pavol_Hejn_a_minimalist_wallpaper_with_a_single_line_drawing_of_6839d413-4e56-4470-81cf-737ac57a5d6c-0_1.json';
import source from './Pavol_Hejn_a_minimalist_wallpaper_with_a_single_line_drawing_of_6839d413-4e56-4470-81cf-737ac57a5d6c-0_1.png';

/**
 * Image of A minimalist wallpaper with a single line drawing of a cyborg, in a striking color such as bright red or blue.
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function AMinimalistWallpaperWithASingleLineDrawingOf6839d4134e56447081cf737ac57a5d6c0_1_Image(
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

AMinimalistWallpaperWithASingleLineDrawingOf6839d4134e56447081cf737ac57a5d6c0_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AMinimalistWallpaperWithASingleLineDrawingOf6839d4134e56447081cf737ac57a5d6c0_1_Image.colorStats = {
    averageColor: Color.fromHex('#bb625e'),
    lightestColor: Color.fromHex('#eeeeff'),
    darkestColor: Color.fromHex('#551100'),
    minmaxWhite: [Color.fromHex('#eeeeff'), Color.fromHex('#330011')],
    minmaxRed: [Color.fromHex('#ff1100'), Color.fromHex('#66ffff')],
    minmaxGreen: [Color.fromHex('#33aa88'), Color.fromHex('#ff1111')],
    minmaxBlue: [Color.fromHex('#0055aa'), Color.fromHex('#ffeecc')],
    mostFrequentColor: Color.fromHex('#dd5544'),
    mostSaturatedColor: Color.fromHex('#661100'),
    mostGroupedColor: Color.fromHex('#ee5544'),
    bottom: {
        averageColor: Color.fromHex('#ae6a6a'),
        lightestColor: Color.fromHex('#eeeeff'),
        darkestColor: Color.fromHex('#552200'),
        minmaxWhite: [Color.fromHex('#eeeeff'), Color.fromHex('#330011')],
        minmaxRed: [Color.fromHex('#ee1111'), Color.fromHex('#44eeff')],
        minmaxGreen: [Color.fromHex('#22bb99'), Color.fromHex('#dd0011')],
        minmaxBlue: [Color.fromHex('#0055aa'), Color.fromHex('#ffeecc')],
        mostFrequentColor: Color.fromHex('#dd5544'),
        mostSaturatedColor: Color.fromHex('#661100'),
        mostGroupedColor: Color.fromHex('#ee4433'),
    },
} satisfies IImageColorStats;