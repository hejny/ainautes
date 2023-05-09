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
import metadata from './Pavol_Hejn_a_wallpaper_featuring_a_digital_rendering_of_a_quant_c268f290-a109-4d1b-ba4e-b27ccc52a525-0_1.json';
import source from './Pavol_Hejn_a_wallpaper_featuring_a_digital_rendering_of_a_quant_c268f290-a109-4d1b-ba4e-b27ccc52a525-0_1.png';

/**
 * Image of A wallpaper featuring a digital rendering of a quantum computer, with a minimalist color scheme and geometric lines.
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function AWallpaperFeaturingADigitalRenderingOfAQuantC268f290A1094d1bBa4eB27ccc52a5250_1_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A wallpaper featuring a digital rendering of a quantum computer, with a minimalist color scheme and geometric lines."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AWallpaperFeaturingADigitalRenderingOfAQuantC268f290A1094d1bBa4eB27ccc52a5250_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AWallpaperFeaturingADigitalRenderingOfAQuantC268f290A1094d1bBa4eB27ccc52a5250_1_Image.colorStats = {
    averageColor: Color.fromHex('#769287'),
    lightestColor: Color.fromHex('#ffffdd'),
    darkestColor: Color.fromHex('#001100'),
    minmaxWhite: [Color.fromHex('#ffffdd'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#994422'), Color.fromHex('#eeffdd')],
    minmaxGreen: [Color.fromHex('#228866'), Color.fromHex('#ffdddd')],
    minmaxBlue: [Color.fromHex('#335577'), Color.fromHex('#ffffbb')],
    mostFrequentColor: Color.fromHex('#558888'),
    mostSaturatedColor: Color.fromHex('#003333'),
    mostGroupedColor: Color.fromHex('#224444'),
    bottom: {
        averageColor: Color.fromHex('#628e86'),
        lightestColor: Color.fromHex('#ddeedd'),
        darkestColor: Color.fromHex('#332200'),
        minmaxWhite: [Color.fromHex('#ffffcc'), Color.fromHex('#001111')],
        minmaxRed: [Color.fromHex('#bb6633'), Color.fromHex('#eeffcc')],
        minmaxGreen: [Color.fromHex('#228866'), Color.fromHex('#ffeecc')],
        minmaxBlue: [Color.fromHex('#226677'), Color.fromHex('#ffffbb')],
        mostFrequentColor: Color.fromHex('#558888'),
        mostSaturatedColor: Color.fromHex('#332200'),
        mostGroupedColor: Color.fromHex('#669999'),
    },
} satisfies IImageColorStats;
