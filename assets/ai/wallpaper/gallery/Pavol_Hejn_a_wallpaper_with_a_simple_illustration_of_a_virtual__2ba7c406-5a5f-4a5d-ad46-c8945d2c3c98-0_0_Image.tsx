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
import metadata from './Pavol_Hejn_a_wallpaper_with_a_simple_illustration_of_a_virtual__2ba7c406-5a5f-4a5d-ad46-c8945d2c3c98-0_0.json';
import source from './Pavol_Hejn_a_wallpaper_with_a_simple_illustration_of_a_virtual__2ba7c406-5a5f-4a5d-ad46-c8945d2c3c98-0_0.png';

/**
 * Image of A wallpaper with a simple illustration of a virtual reality headset, against a gradient background of two contrasting colors.
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function AWallpaperWithASimpleIllustrationOfAVirtual2ba7c4065a5f4a5dAd46C8945d2c3c980_0_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A wallpaper with a simple illustration of a virtual reality headset, against a gradient background of two contrasting colors."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AWallpaperWithASimpleIllustrationOfAVirtual2ba7c4065a5f4a5dAd46C8945d2c3c980_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AWallpaperWithASimpleIllustrationOfAVirtual2ba7c4065a5f4a5dAd46C8945d2c3c980_0_Image.colorStats = {
    averageColor: Color.fromHex('#560e4b'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#ee2211'), Color.fromHex('#bbffff')],
    minmaxGreen: [Color.fromHex('#3399aa'), Color.fromHex('#ff00bb')],
    minmaxBlue: [Color.fromHex('#6611aa'), Color.fromHex('#ffffee')],
    mostFrequentColor: Color.fromHex('#661155'),
    mostSaturatedColor: Color.fromHex('#001122'),
    mostGroupedColor: Color.fromHex('#111144'),
    bottom: {
        averageColor: Color.fromHex('#32094b'),
        lightestColor: Color.fromHex('#ddddff'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#ddeeff'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#dd3344'), Color.fromHex('#99eeff')],
        minmaxGreen: [Color.fromHex('#3399aa'), Color.fromHex('#bb00cc')],
        minmaxBlue: [Color.fromHex('#115599'), Color.fromHex('#ddeeff')],
        mostFrequentColor: Color.fromHex('#661155'),
        mostSaturatedColor: Color.fromHex('#002244'),
        mostGroupedColor: Color.fromHex('#002244'),
    },
} satisfies IImageColorStats;
