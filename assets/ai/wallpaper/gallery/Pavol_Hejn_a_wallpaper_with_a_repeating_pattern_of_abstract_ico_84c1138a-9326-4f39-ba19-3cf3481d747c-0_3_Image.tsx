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
import metadata from './Pavol_Hejn_a_wallpaper_with_a_repeating_pattern_of_abstract_ico_84c1138a-9326-4f39-ba19-3cf3481d747c-0_3.json';
import source from './Pavol_Hejn_a_wallpaper_with_a_repeating_pattern_of_abstract_ico_84c1138a-9326-4f39-ba19-3cf3481d747c-0_3.png';

/**
 * Image of A wallpaper with a repeating pattern of abstract icons and symbols commonly used in the tech industry, such as computer chips and power buttons.
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function AWallpaperWithARepeatingPatternOfAbstractIco84c1138a93264f39Ba193cf3481d747c0_3_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A wallpaper with a repeating pattern of abstract icons and symbols commonly used in the tech industry, such as computer chips and power buttons."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AWallpaperWithARepeatingPatternOfAbstractIco84c1138a93264f39Ba193cf3481d747c0_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AWallpaperWithARepeatingPatternOfAbstractIco84c1138a93264f39Ba193cf3481d747c0_3_Image.colorStats = {
    averageColor: Color.fromHex('#272243'),
    lightestColor: Color.fromHex('#eeffff'),
    darkestColor: Color.fromHex('#001111'),
    minmaxWhite: [Color.fromHex('#eeffff'), Color.fromHex('#000022')],
    minmaxRed: [Color.fromHex('#bb3366'), Color.fromHex('#99ffff')],
    minmaxGreen: [Color.fromHex('#77bb66'), Color.fromHex('#aa1177')],
    minmaxBlue: [Color.fromHex('#444488'), Color.fromHex('#eeffff')],
    mostFrequentColor: Color.fromHex('#111133'),
    mostSaturatedColor: Color.fromHex('#001133'),
    mostGroupedColor: Color.fromHex('#221133'),
    bottom: {
        averageColor: Color.fromHex('#272142'),
        lightestColor: Color.fromHex('#ddffff'),
        darkestColor: Color.fromHex('#001122'),
        minmaxWhite: [Color.fromHex('#ddffff'), Color.fromHex('#000022')],
        minmaxRed: [Color.fromHex('#aa3355'), Color.fromHex('#99ffff')],
        minmaxGreen: [Color.fromHex('#44bb88'), Color.fromHex('#cc4499')],
        minmaxBlue: [Color.fromHex('#552277'), Color.fromHex('#ddffee')],
        mostFrequentColor: Color.fromHex('#111133'),
        mostSaturatedColor: Color.fromHex('#003344'),
        mostGroupedColor: Color.fromHex('#221133'),
    },
} satisfies IImageColorStats;