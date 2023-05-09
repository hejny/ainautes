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
import metadata from './Pavol_Hejn_a_wallpaper_with_a_simple_graphic_of_a_robot_arm_aga_c5c5f8df-6b84-4c2d-a94d-71c70b1a0fac-0_1.json';
import source from './Pavol_Hejn_a_wallpaper_with_a_simple_graphic_of_a_robot_arm_aga_c5c5f8df-6b84-4c2d-a94d-71c70b1a0fac-0_1.png';

/**
 * Image of A wallpaper with a simple graphic of a robot arm, against a gradient background of two complementary colors.
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function AWallpaperWithASimpleGraphicOfARobotArmAgaC5c5f8df6b844c2dA94d71c70b1a0fac0_1_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A wallpaper with a simple graphic of a robot arm, against a gradient background of two complementary colors."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AWallpaperWithASimpleGraphicOfARobotArmAgaC5c5f8df6b844c2dA94d71c70b1a0fac0_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AWallpaperWithASimpleGraphicOfARobotArmAgaC5c5f8df6b844c2dA94d71c70b1a0fac0_1_Image.colorStats = {
    averageColor: Color.fromHex('#e28627'),
    lightestColor: Color.fromHex('#ffffee'),
    darkestColor: Color.fromHex('#110000'),
    minmaxWhite: [Color.fromHex('#ffffee'), Color.fromHex('#110000')],
    minmaxRed: [Color.fromHex('#ee2211'), Color.fromHex('#ffffee')],
    minmaxGreen: [Color.fromHex('#558855'), Color.fromHex('#ee2211')],
    minmaxBlue: [Color.fromHex('#335588'), Color.fromHex('#ffdd00')],
    mostFrequentColor: Color.fromHex('#ff9922'),
    mostSaturatedColor: Color.fromHex('#330011'),
    mostGroupedColor: Color.fromHex('#ffbb33'),
    bottom: {
        averageColor: Color.fromHex('#da6e1d'),
        lightestColor: Color.fromHex('#ddccee'),
        darkestColor: Color.fromHex('#220000'),
        minmaxWhite: [Color.fromHex('#eeeedd'), Color.fromHex('#220000')],
        minmaxRed: [Color.fromHex('#dd2200'), Color.fromHex('#ffffcc')],
        minmaxGreen: [Color.fromHex('#558855'), Color.fromHex('#dd2200')],
        minmaxBlue: [Color.fromHex('#335588'), Color.fromHex('#ffdd00')],
        mostFrequentColor: Color.fromHex('#ff9922'),
        mostSaturatedColor: Color.fromHex('#551100'),
        mostGroupedColor: Color.fromHex('#ff9911'),
    },
} satisfies IImageColorStats;
