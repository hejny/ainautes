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
import metadata from './Pavol_Hejn_a_wallpaper_with_a_repeating_pattern_of_abstract_geo_4f913986-f1b4-4da4-8506-705bbd724c4d-0_3.json';
import source from './Pavol_Hejn_a_wallpaper_with_a_repeating_pattern_of_abstract_geo_4f913986-f1b4-4da4-8506-705bbd724c4d-0_3.png';

/**
 * Image of A wallpaper with a repeating pattern of abstract geometric shapes and patterns, inspired by web design trends and color schemes.
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function AWallpaperWithARepeatingPatternOfAbstractGeo4f913986F1b44da48506705bbd724c4d0_3_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A wallpaper with a repeating pattern of abstract geometric shapes and patterns, inspired by web design trends and color schemes."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AWallpaperWithARepeatingPatternOfAbstractGeo4f913986F1b44da48506705bbd724c4d0_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AWallpaperWithARepeatingPatternOfAbstractGeo4f913986F1b44da48506705bbd724c4d0_3_Image.colorStats = {
    averageColor: Color.fromHex('#584f3d'),
    lightestColor: Color.fromHex('#ffddaa'),
    darkestColor: Color.fromHex('#001100'),
    minmaxWhite: [Color.fromHex('#ffddaa'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#ff3322'), Color.fromHex('#33aa99')],
    minmaxGreen: [Color.fromHex('#44aa77'), Color.fromHex('#ff3322')],
    minmaxBlue: [Color.fromHex('#113355'), Color.fromHex('#ffdd77')],
    mostFrequentColor: Color.fromHex('#113344'),
    mostSaturatedColor: Color.fromHex('#001111'),
    mostGroupedColor: Color.fromHex('#111122'),
    bottom: {
        averageColor: Color.fromHex('#534e3e'),
        lightestColor: Color.fromHex('#ffcc88'),
        darkestColor: Color.fromHex('#001100'),
        minmaxWhite: [Color.fromHex('#ffcc88'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#cc3322'), Color.fromHex('#229988')],
        minmaxGreen: [Color.fromHex('#559966'), Color.fromHex('#ff4433')],
        minmaxBlue: [Color.fromHex('#226677'), Color.fromHex('#ffcc55')],
        mostFrequentColor: Color.fromHex('#113344'),
        mostSaturatedColor: Color.fromHex('#001111'),
        mostGroupedColor: Color.fromHex('#ee7733'),
    },
} satisfies IImageColorStats;