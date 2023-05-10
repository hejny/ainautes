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
import metadata from './Pavol_Hejn_a_wallpaper_with_a_single_line_drawing_of_a_drone_ag_95660e98-b69e-4c6b-816b-e38b37c78808-0_1.json';
import source from './Pavol_Hejn_a_wallpaper_with_a_single_line_drawing_of_a_drone_ag_95660e98-b69e-4c6b-816b-e38b37c78808-0_1.png';

/**
 * Image of A wallpaper with a single line drawing of a drone, against a background of geometric shapes in complementary colors.
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function AWallpaperWithASingleLineDrawingOfADroneAg95660e98B69e4c6b816bE38b37c788080_1_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A wallpaper with a single line drawing of a drone, against a background of geometric shapes in complementary colors."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AWallpaperWithASingleLineDrawingOfADroneAg95660e98B69e4c6b816bE38b37c788080_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AWallpaperWithASingleLineDrawingOfADroneAg95660e98B69e4c6b816bE38b37c788080_1_Image.colorStats = {
    averageColor: Color.fromHex('#414540'),
    lightestColor: Color.fromHex('#bbbbaa'),
    darkestColor: Color.fromHex('#001100'),
    minmaxWhite: [Color.fromHex('#dddd99'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#dd3311'), Color.fromHex('#dddd99')],
    minmaxGreen: [Color.fromHex('#668855'), Color.fromHex('#ff4400')],
    minmaxBlue: [Color.fromHex('#115588'), Color.fromHex('#ffaa33')],
    mostFrequentColor: Color.fromHex('#113333'),
    mostSaturatedColor: Color.fromHex('#003333'),
    mostGroupedColor: Color.fromHex('#ee7744'),
    bottom: {
        averageColor: Color.fromHex('#313f41'),
        lightestColor: Color.fromHex('#bbbbaa'),
        darkestColor: Color.fromHex('#001100'),
        minmaxWhite: [Color.fromHex('#dddd99'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#dd3311'), Color.fromHex('#dddd99')],
        minmaxGreen: [Color.fromHex('#668855'), Color.fromHex('#dd3311')],
        minmaxBlue: [Color.fromHex('#115588'), Color.fromHex('#ffbb55')],
        mostFrequentColor: Color.fromHex('#113333'),
        mostSaturatedColor: Color.fromHex('#003333'),
        mostGroupedColor: Color.fromHex('#224444'),
    },
} satisfies IImageColorStats;