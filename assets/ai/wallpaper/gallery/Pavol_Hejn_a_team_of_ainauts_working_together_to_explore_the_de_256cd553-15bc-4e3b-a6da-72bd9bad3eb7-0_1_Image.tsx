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
import metadata from './Pavol_Hejn_a_team_of_ainauts_working_together_to_explore_the_de_256cd553-15bc-4e3b-a6da-72bd9bad3eb7-0_1.json';
import source from './Pavol_Hejn_a_team_of_ainauts_working_together_to_explore_the_de_256cd553-15bc-4e3b-a6da-72bd9bad3eb7-0_1.png';

/**
 * Image of A team of AInauts working together to explore the depths of a black hole, with futuristic technology at their fingertips.
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function ATeamOfAinautsWorkingTogetherToExploreTheDe256cd55315bc4e3bA6da72bd9bad3eb70_1_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A team of AInauts working together to explore the depths of a black hole, with futuristic technology at their fingertips."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

ATeamOfAinautsWorkingTogetherToExploreTheDe256cd55315bc4e3bA6da72bd9bad3eb70_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ATeamOfAinautsWorkingTogetherToExploreTheDe256cd55315bc4e3bA6da72bd9bad3eb70_1_Image.colorStats = {
    averageColor: Color.fromHex('#414849'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#bb3311'), Color.fromHex('#bbffff')],
    minmaxGreen: [Color.fromHex('#55bb88'), Color.fromHex('#ffeeff')],
    minmaxBlue: [Color.fromHex('#116688'), Color.fromHex('#ffffbb')],
    mostFrequentColor: Color.fromHex('#112233'),
    mostSaturatedColor: Color.fromHex('#110011'),
    mostGroupedColor: Color.fromHex('#445555'),
    bottom: {
        averageColor: Color.fromHex('#4f4b48'),
        lightestColor: Color.fromHex('#ffffff'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#bb3311'), Color.fromHex('#ddffff')],
        minmaxGreen: [Color.fromHex('#669966'), Color.fromHex('#ffeeff')],
        minmaxBlue: [Color.fromHex('#225577'), Color.fromHex('#ffffdd')],
        mostFrequentColor: Color.fromHex('#112233'),
        mostSaturatedColor: Color.fromHex('#110011'),
        mostGroupedColor: Color.fromHex('#334455'),
    },
} satisfies IImageColorStats;
