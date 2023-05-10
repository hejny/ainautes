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
import metadata from './Pavol_Hejn_a_wallpaper_featuring_a_digital_rendering_of_a_quant_347e9c99-5df9-4375-a4d4-04f5bdf41f29-0_0.json';
import source from './Pavol_Hejn_a_wallpaper_featuring_a_digital_rendering_of_a_quant_347e9c99-5df9-4375-a4d4-04f5bdf41f29-0_0.png';

/**
 * Image of A wallpaper featuring a digital rendering of a quantum computer, with a minimalist color scheme and geometric lines.
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function AWallpaperFeaturingADigitalRenderingOfAQuant347e9c995df94375A4d404f5bdf41f290_0_Image(
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

AWallpaperFeaturingADigitalRenderingOfAQuant347e9c995df94375A4d404f5bdf41f290_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AWallpaperFeaturingADigitalRenderingOfAQuant347e9c995df94375A4d404f5bdf41f290_0_Image.colorStats = {
    averageColor: Color.fromHex('#212023'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#aa3311'), Color.fromHex('#99ffff')],
    minmaxGreen: [Color.fromHex('#33aa99'), Color.fromHex('#ffeeff')],
    minmaxBlue: [Color.fromHex('#226699'), Color.fromHex('#ffff88')],
    mostFrequentColor: Color.fromHex('#000000'),
    mostSaturatedColor: Color.fromHex('#000011'),
    mostGroupedColor: Color.fromHex('#000000'),
    bottom: {
        averageColor: Color.fromHex('#292a2b'),
        lightestColor: Color.fromHex('#ffeeff'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#bb5511'), Color.fromHex('#eeffff')],
        minmaxGreen: [Color.fromHex('#558877'), Color.fromHex('#ffeeff')],
        minmaxBlue: [Color.fromHex('#334477'), Color.fromHex('#ffff88')],
        mostFrequentColor: Color.fromHex('#000000'),
        mostSaturatedColor: Color.fromHex('#000011'),
        mostGroupedColor: Color.fromHex('#000011'),
    },
} satisfies IImageColorStats;