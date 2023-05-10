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
import metadata from './Pavol_Hejn_an_abstract_wallpaper_inspired_by_the_shapes_and_col_028d25e0-9687-43a2-aeb7-17a3b30b0362-0_1.json';
import source from './Pavol_Hejn_an_abstract_wallpaper_inspired_by_the_shapes_and_col_028d25e0-9687-43a2-aeb7-17a3b30b0362-0_1.png';

/**
 * Image of An abstract wallpaper inspired by the shapes and colors of quantum physics, with bold colors and intricate lines.
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function AnAbstractWallpaperInspiredByTheShapesAndCol028d25e0968743a2Aeb717a3b30b03620_1_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="An abstract wallpaper inspired by the shapes and colors of quantum physics, with bold colors and intricate lines."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AnAbstractWallpaperInspiredByTheShapesAndCol028d25e0968743a2Aeb717a3b30b03620_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AnAbstractWallpaperInspiredByTheShapesAndCol028d25e0968743a2Aeb717a3b30b03620_1_Image.colorStats = {
    averageColor: Color.fromHex('#182024'),
    lightestColor: Color.fromHex('#ffffdd'),
    darkestColor: Color.fromHex('#001100'),
    minmaxWhite: [Color.fromHex('#ffffdd'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#dd2222'), Color.fromHex('#00aabb')],
    minmaxGreen: [Color.fromHex('#229955'), Color.fromHex('#ee1177')],
    minmaxBlue: [Color.fromHex('#114488'), Color.fromHex('#ffffbb')],
    mostFrequentColor: Color.fromHex('#001111'),
    mostSaturatedColor: Color.fromHex('#001111'),
    mostGroupedColor: Color.fromHex('#111111'),
    bottom: {
        averageColor: Color.fromHex('#162023'),
        lightestColor: Color.fromHex('#ddccaa'),
        darkestColor: Color.fromHex('#001100'),
        minmaxWhite: [Color.fromHex('#ccddaa'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#dd2222'), Color.fromHex('#119988')],
        minmaxGreen: [Color.fromHex('#119966'), Color.fromHex('#cc0044')],
        minmaxBlue: [Color.fromHex('#333366'), Color.fromHex('#ddbb33')],
        mostFrequentColor: Color.fromHex('#001111'),
        mostSaturatedColor: Color.fromHex('#001111'),
        mostGroupedColor: Color.fromHex('#111111'),
    },
} satisfies IImageColorStats;