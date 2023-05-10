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
import metadata from './Pavol_Hejn_a_wallpaper_with_a_repeating_pattern_of_circuit_boar_1d5bfa73-c656-4cd6-8a61-1a1479694a3f-0_2.json';
import source from './Pavol_Hejn_a_wallpaper_with_a_repeating_pattern_of_circuit_boar_1d5bfa73-c656-4cd6-8a61-1a1479694a3f-0_2.png';

/**
 * Image of A wallpaper with a repeating pattern of circuit board components, in shades of black, grey, and neon green.
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function AWallpaperWithARepeatingPatternOfCircuitBoar1d5bfa73C6564cd68a611a1479694a3f0_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A wallpaper with a repeating pattern of circuit board components, in shades of black, grey, and neon green."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AWallpaperWithARepeatingPatternOfCircuitBoar1d5bfa73C6564cd68a611a1479694a3f0_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AWallpaperWithARepeatingPatternOfCircuitBoar1d5bfa73C6564cd68a611a1479694a3f0_2_Image.colorStats = {
    averageColor: Color.fromHex('#16271a'),
    lightestColor: Color.fromHex('#ccddbb'),
    darkestColor: Color.fromHex('#001100'),
    minmaxWhite: [Color.fromHex('#ccddbb'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#554411'), Color.fromHex('#66eebb')],
    minmaxGreen: [Color.fromHex('#44bb44'), Color.fromHex('#000022')],
    minmaxBlue: [Color.fromHex('#115566'), Color.fromHex('#ccffaa')],
    mostFrequentColor: Color.fromHex('#000000'),
    mostSaturatedColor: Color.fromHex('#001100'),
    mostGroupedColor: Color.fromHex('#000000'),
    bottom: {
        averageColor: Color.fromHex('#16281a'),
        lightestColor: Color.fromHex('#aaddaa'),
        darkestColor: Color.fromHex('#001100'),
        minmaxWhite: [Color.fromHex('#bbdd99'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#666633'), Color.fromHex('#aaddaa')],
        minmaxGreen: [Color.fromHex('#11aa44'), Color.fromHex('#000022')],
        minmaxBlue: [Color.fromHex('#444455'), Color.fromHex('#bbdd99')],
        mostFrequentColor: Color.fromHex('#000000'),
        mostSaturatedColor: Color.fromHex('#001100'),
        mostGroupedColor: Color.fromHex('#000000'),
    },
} satisfies IImageColorStats;