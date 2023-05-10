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
import metadata from './Pavol_Hejn_a_wallpaper_with_a_simple_graphic_of_a_digital_calen_93265478-ae1c-4e83-a78c-08b3a7c90255-0_0.json';
import source from './Pavol_Hejn_a_wallpaper_with_a_simple_graphic_of_a_digital_calen_93265478-ae1c-4e83-a78c-08b3a7c90255-0_0.png';

/**
 * Image of A wallpaper with a simple graphic of a digital calendar or to-do list, with space for notes and reminders.
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function AWallpaperWithASimpleGraphicOfADigitalCalen93265478Ae1c4e83A78c08b3a7c902550_0_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A wallpaper with a simple graphic of a digital calendar or to-do list, with space for notes and reminders."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AWallpaperWithASimpleGraphicOfADigitalCalen93265478Ae1c4e83A78c08b3a7c902550_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AWallpaperWithASimpleGraphicOfADigitalCalen93265478Ae1c4e83A78c08b3a7c902550_0_Image.colorStats = {
    averageColor: Color.fromHex('#d1bfbd'),
    lightestColor: Color.fromHex('#ffeeff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#bb5555'), Color.fromHex('#eeffff')],
    minmaxGreen: [Color.fromHex('#779977'), Color.fromHex('#ffeeff')],
    minmaxBlue: [Color.fromHex('#556688'), Color.fromHex('#ffffee')],
    mostFrequentColor: Color.fromHex('#ffffff'),
    mostSaturatedColor: Color.fromHex('#001111'),
    mostGroupedColor: Color.fromHex('#eebbbb'),
    bottom: {
        averageColor: Color.fromHex('#cec9c3'),
        lightestColor: Color.fromHex('#ffeeff'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#aa5555'), Color.fromHex('#eeffff')],
        minmaxGreen: [Color.fromHex('#779977'), Color.fromHex('#ffeeff')],
        minmaxBlue: [Color.fromHex('#555566'), Color.fromHex('#ffffee')],
        mostFrequentColor: Color.fromHex('#ffffff'),
        mostSaturatedColor: Color.fromHex('#110011'),
        mostGroupedColor: Color.fromHex('#eeeeee'),
    },
} satisfies IImageColorStats;