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
import metadata from './Pavol_Hejn_a_group_of_ainauts_exploring_an_underground_cavern_o_4f79da1b-4619-4470-93e1-c64b833094b3-0_2.json';
import source from './Pavol_Hejn_a_group_of_ainauts_exploring_an_underground_cavern_o_4f79da1b-4619-4470-93e1-c64b833094b3-0_2.png';

/**
 * Image of A group of AInauts exploring an underground cavern on a distant planet, with glowing fungi and strange creatures all around them.
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function AGroupOfAinautsExploringAnUndergroundCavernO4f79da1b4619447093e1C64b833094b30_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A group of AInauts exploring an underground cavern on a distant planet, with glowing fungi and strange creatures all around them."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AGroupOfAinautsExploringAnUndergroundCavernO4f79da1b4619447093e1C64b833094b30_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AGroupOfAinautsExploringAnUndergroundCavernO4f79da1b4619447093e1C64b833094b30_2_Image.colorStats = {
    averageColor: Color.fromHex('#365754'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#993333'), Color.fromHex('#22eedd')],
    minmaxGreen: [Color.fromHex('#33aa77'), Color.fromHex('#ffeeff')],
    minmaxBlue: [Color.fromHex('#0088cc'), Color.fromHex('#ffffaa')],
    mostFrequentColor: Color.fromHex('#110000'),
    mostSaturatedColor: Color.fromHex('#110022'),
    mostGroupedColor: Color.fromHex('#111111'),
    bottom: {
        averageColor: Color.fromHex('#35413f'),
        lightestColor: Color.fromHex('#ffffff'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#993333'), Color.fromHex('#66ffdd')],
        minmaxGreen: [Color.fromHex('#449966'), Color.fromHex('#ffffff')],
        minmaxBlue: [Color.fromHex('#114466'), Color.fromHex('#ffffcc')],
        mostFrequentColor: Color.fromHex('#110000'),
        mostSaturatedColor: Color.fromHex('#110000'),
        mostGroupedColor: Color.fromHex('#111111'),
    },
} satisfies IImageColorStats;
