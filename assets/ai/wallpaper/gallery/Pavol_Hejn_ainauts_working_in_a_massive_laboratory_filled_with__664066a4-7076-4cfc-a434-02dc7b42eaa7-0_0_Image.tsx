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
import metadata from './Pavol_Hejn_ainauts_working_in_a_massive_laboratory_filled_with__664066a4-7076-4cfc-a434-02dc7b42eaa7-0_0.json';
import source from './Pavol_Hejn_ainauts_working_in_a_massive_laboratory_filled_with__664066a4-7076-4cfc-a434-02dc7b42eaa7-0_0.png';

/**
 * Image of AInauts working in a massive laboratory filled with glowing equipment and holographic displays, conducting cutting-edge research.
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function AinautsWorkingInAMassiveLaboratoryFilledWith664066a470764cfcA43402dc7b42eaa70_0_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="AInauts working in a massive laboratory filled with glowing equipment and holographic displays, conducting cutting-edge research."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AinautsWorkingInAMassiveLaboratoryFilledWith664066a470764cfcA43402dc7b42eaa70_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AinautsWorkingInAMassiveLaboratoryFilledWith664066a470764cfcA43402dc7b42eaa70_0_Image.colorStats = {
    averageColor: Color.fromHex('#07444a'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#001100'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#662222'), Color.fromHex('#11eeee')],
    minmaxGreen: [Color.fromHex('#00aa77'), Color.fromHex('#ffeeff')],
    minmaxBlue: [Color.fromHex('#006688'), Color.fromHex('#ffffff')],
    mostFrequentColor: Color.fromHex('#001111'),
    mostSaturatedColor: Color.fromHex('#000011'),
    mostGroupedColor: Color.fromHex('#001111'),
    bottom: {
        averageColor: Color.fromHex('#06434a'),
        lightestColor: Color.fromHex('#ffffff'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#662222'), Color.fromHex('#11eeee')],
        minmaxGreen: [Color.fromHex('#119988'), Color.fromHex('#ffeeff')],
        minmaxBlue: [Color.fromHex('#006688'), Color.fromHex('#ffffff')],
        mostFrequentColor: Color.fromHex('#001111'),
        mostSaturatedColor: Color.fromHex('#110000'),
        mostGroupedColor: Color.fromHex('#001111'),
    },
} satisfies IImageColorStats;
