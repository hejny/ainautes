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
import metadata from './Pavol_Hejn_a_wallpaper_featuring_a_simple_graphic_of_a_robot_ar_9a58cf40-ae4c-4050-a7db-05a76ecf08b0-0_3.json';
import source from './Pavol_Hejn_a_wallpaper_featuring_a_simple_graphic_of_a_robot_ar_9a58cf40-ae4c-4050-a7db-05a76ecf08b0-0_3.png';

/**
 * Image of A wallpaper featuring a simple graphic of a robot arm holding a smartphone, with a space for placing important notifications or messages.
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function AWallpaperFeaturingASimpleGraphicOfARobotAr9a58cf40Ae4c4050A7db05a76ecf08b00_3_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A wallpaper featuring a simple graphic of a robot arm holding a smartphone, with a space for placing important notifications or messages."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AWallpaperFeaturingASimpleGraphicOfARobotAr9a58cf40Ae4c4050A7db05a76ecf08b00_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AWallpaperFeaturingASimpleGraphicOfARobotAr9a58cf40Ae4c4050A7db05a76ecf08b00_3_Image.colorStats = {
    averageColor: Color.fromHex('#131719'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#cc2222'), Color.fromHex('#33ffff')],
    minmaxGreen: [Color.fromHex('#339977'), Color.fromHex('#aa0000')],
    minmaxBlue: [Color.fromHex('#445588'), Color.fromHex('#eeff55')],
    mostFrequentColor: Color.fromHex('#000000'),
    mostSaturatedColor: Color.fromHex('#000011'),
    mostGroupedColor: Color.fromHex('#000000'),
    bottom: {
        averageColor: Color.fromHex('#16181a'),
        lightestColor: Color.fromHex('#ffffff'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#bb2222'), Color.fromHex('#33ffff')],
        minmaxGreen: [Color.fromHex('#119988'), Color.fromHex('#ffffff')],
        minmaxBlue: [Color.fromHex('#335577'), Color.fromHex('#ffffee')],
        mostFrequentColor: Color.fromHex('#000000'),
        mostSaturatedColor: Color.fromHex('#000011'),
        mostGroupedColor: Color.fromHex('#000000'),
    },
} satisfies IImageColorStats;