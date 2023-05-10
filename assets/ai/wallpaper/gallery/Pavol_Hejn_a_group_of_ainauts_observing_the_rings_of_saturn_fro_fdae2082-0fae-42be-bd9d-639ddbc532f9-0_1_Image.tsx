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
import metadata from './Pavol_Hejn_a_group_of_ainauts_observing_the_rings_of_saturn_fro_fdae2082-0fae-42be-bd9d-639ddbc532f9-0_1.json';
import source from './Pavol_Hejn_a_group_of_ainauts_observing_the_rings_of_saturn_fro_fdae2082-0fae-42be-bd9d-639ddbc532f9-0_1.png';

/**
 * Image of A group of AInauts observing the rings of Saturn from a high-tech space station, surrounded by stars and galaxies.
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function AGroupOfAinautsObservingTheRingsOfSaturnFroFdae20820fae42beBd9d639ddbc532f90_1_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A group of AInauts observing the rings of Saturn from a high-tech space station, surrounded by stars and galaxies."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AGroupOfAinautsObservingTheRingsOfSaturnFroFdae20820fae42beBd9d639ddbc532f90_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AGroupOfAinautsObservingTheRingsOfSaturnFroFdae20820fae42beBd9d639ddbc532f90_1_Image.colorStats = {
    averageColor: Color.fromHex('#232c39'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#663322'), Color.fromHex('#bbffff')],
    minmaxGreen: [Color.fromHex('#558877'), Color.fromHex('#ffeeff')],
    minmaxBlue: [Color.fromHex('#224499'), Color.fromHex('#ffffdd')],
    mostFrequentColor: Color.fromHex('#000000'),
    mostSaturatedColor: Color.fromHex('#110000'),
    mostGroupedColor: Color.fromHex('#110000'),
    bottom: {
        averageColor: Color.fromHex('#303139'),
        lightestColor: Color.fromHex('#ffffff'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#775544'), Color.fromHex('#ccffff')],
        minmaxGreen: [Color.fromHex('#558877'), Color.fromHex('#ffeeff')],
        minmaxBlue: [Color.fromHex('#224499'), Color.fromHex('#ffffdd')],
        mostFrequentColor: Color.fromHex('#000000'),
        mostSaturatedColor: Color.fromHex('#003344'),
        mostGroupedColor: Color.fromHex('#110000'),
    },
} satisfies IImageColorStats;