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
import metadata from './Pavol_Hejn_a_team_of_ainauts_and_their_ai_companions_piloting_a_5960d372-76be-4878-b6c6-8bece6fc0d72-0_2.json';
import source from './Pavol_Hejn_a_team_of_ainauts_and_their_ai_companions_piloting_a_5960d372-76be-4878-b6c6-8bece6fc0d72-0_2.png';

/**
 * Image of A team of AInauts and their AI companions piloting a massive spacecraft through the heart of a galaxy, with stars and nebulae all around them.
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function ATeamOfAinautsAndTheirAiCompanionsPilotingA5960d37276be4878B6c68bece6fc0d720_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A team of AInauts and their AI companions piloting a massive spacecraft through the heart of a galaxy, with stars and nebulae all around them."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

ATeamOfAinautsAndTheirAiCompanionsPilotingA5960d37276be4878B6c68bece6fc0d720_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ATeamOfAinautsAndTheirAiCompanionsPilotingA5960d37276be4878B6c68bece6fc0d720_2_Image.colorStats = {
    averageColor: Color.fromHex('#334552'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#bb4433'), Color.fromHex('#99ffff')],
    minmaxGreen: [Color.fromHex('#778855'), Color.fromHex('#ffffff')],
    minmaxBlue: [Color.fromHex('#115599'), Color.fromHex('#ffffdd')],
    mostFrequentColor: Color.fromHex('#001111'),
    mostSaturatedColor: Color.fromHex('#001111'),
    mostGroupedColor: Color.fromHex('#111111'),
    bottom: {
        averageColor: Color.fromHex('#323d47'),
        lightestColor: Color.fromHex('#ffffff'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#bb4433'), Color.fromHex('#ccffff')],
        minmaxGreen: [Color.fromHex('#778855'), Color.fromHex('#ffffff')],
        minmaxBlue: [Color.fromHex('#225588'), Color.fromHex('#ffffdd')],
        mostFrequentColor: Color.fromHex('#001111'),
        mostSaturatedColor: Color.fromHex('#001111'),
        mostGroupedColor: Color.fromHex('#223344'),
    },
} satisfies IImageColorStats;