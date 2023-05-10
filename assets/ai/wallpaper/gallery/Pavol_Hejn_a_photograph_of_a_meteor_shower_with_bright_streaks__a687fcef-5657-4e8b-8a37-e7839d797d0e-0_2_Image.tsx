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
import metadata from './Pavol_Hejn_a_photograph_of_a_meteor_shower_with_bright_streaks__a687fcef-5657-4e8b-8a37-e7839d797d0e-0_2.json';
import source from './Pavol_Hejn_a_photograph_of_a_meteor_shower_with_bright_streaks__a687fcef-5657-4e8b-8a37-e7839d797d0e-0_2.png';

/**
 * Image of A photograph of a meteor shower, with bright streaks of light crossing the night sky.
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function APhotographOfAMeteorShowerWithBrightStreaksA687fcef56574e8b8a37E7839d797d0e0_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A photograph of a meteor shower, with bright streaks of light crossing the night sky."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

APhotographOfAMeteorShowerWithBrightStreaksA687fcef56574e8b8a37E7839d797d0e0_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
APhotographOfAMeteorShowerWithBrightStreaksA687fcef56574e8b8a37E7839d797d0e0_2_Image.colorStats = {
    averageColor: Color.fromHex('#30313b'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#aa6644'), Color.fromHex('#ccffff')],
    minmaxGreen: [Color.fromHex('#778877'), Color.fromHex('#ffeeff')],
    minmaxBlue: [Color.fromHex('#3344aa'), Color.fromHex('#ffffcc')],
    mostFrequentColor: Color.fromHex('#000000'),
    mostSaturatedColor: Color.fromHex('#110000'),
    mostGroupedColor: Color.fromHex('#000000'),
    bottom: {
        averageColor: Color.fromHex('#2a2727'),
        lightestColor: Color.fromHex('#ffffff'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#aa6644'), Color.fromHex('#ddffff')],
        minmaxGreen: [Color.fromHex('#778877'), Color.fromHex('#ffeeff')],
        minmaxBlue: [Color.fromHex('#444499'), Color.fromHex('#ffffcc')],
        mostFrequentColor: Color.fromHex('#000000'),
        mostSaturatedColor: Color.fromHex('#110000'),
        mostGroupedColor: Color.fromHex('#000000'),
    },
} satisfies IImageColorStats;