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
import metadata from './Pavol_Hejn_a_wallpaper_with_a_simple_illustration_of_a_virtual__2ba7c406-5a5f-4a5d-ad46-c8945d2c3c98-0_3.json';
import source from './Pavol_Hejn_a_wallpaper_with_a_simple_illustration_of_a_virtual__2ba7c406-5a5f-4a5d-ad46-c8945d2c3c98-0_3.png';

/**
 * Image of A wallpaper with a simple illustration of a virtual reality headset, against a gradient background of two contrasting colors.
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function AWallpaperWithASimpleIllustrationOfAVirtual2ba7c4065a5f4a5dAd46C8945d2c3c980_3_Image(
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

AWallpaperWithASimpleIllustrationOfAVirtual2ba7c4065a5f4a5dAd46C8945d2c3c980_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AWallpaperWithASimpleIllustrationOfAVirtual2ba7c4065a5f4a5dAd46C8945d2c3c980_3_Image.colorStats = {
    averageColor: Color.fromHex('#845340'),
    lightestColor: Color.fromHex('#ffffee'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffffee'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#ee1122'), Color.fromHex('#eeffee')],
    minmaxGreen: [Color.fromHex('#66cc77'), Color.fromHex('#ee1122')],
    minmaxBlue: [Color.fromHex('#224477'), Color.fromHex('#ffffbb')],
    mostFrequentColor: Color.fromHex('#003333'),
    mostSaturatedColor: Color.fromHex('#881100'),
    mostGroupedColor: Color.fromHex('#ff9933'),
    bottom: {
        averageColor: Color.fromHex('#5c4c3c'),
        lightestColor: Color.fromHex('#eeeedd'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#eeffdd'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#ee1122'), Color.fromHex('#ddffdd')],
        minmaxGreen: [Color.fromHex('#55aa66'), Color.fromHex('#ee1122')],
        minmaxBlue: [Color.fromHex('#114455'), Color.fromHex('#ffffbb')],
        mostFrequentColor: Color.fromHex('#003333'),
        mostSaturatedColor: Color.fromHex('#881100'),
        mostGroupedColor: Color.fromHex('#003344'),
    },
} satisfies IImageColorStats;
