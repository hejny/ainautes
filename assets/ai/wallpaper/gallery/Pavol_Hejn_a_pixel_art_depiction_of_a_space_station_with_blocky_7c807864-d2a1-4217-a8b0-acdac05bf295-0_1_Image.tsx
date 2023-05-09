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
import metadata from './Pavol_Hejn_a_pixel_art_depiction_of_a_space_station_with_blocky_7c807864-d2a1-4217-a8b0-acdac05bf295-0_1.json';
import source from './Pavol_Hejn_a_pixel_art_depiction_of_a_space_station_with_blocky_7c807864-d2a1-4217-a8b0-acdac05bf295-0_1.png';

/**
 * Image of A pixel art depiction of a space station, with blocky shapes and limited colors that create a retro and futuristic feel.
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function APixelArtDepictionOfASpaceStationWithBlocky7c807864D2a14217A8b0Acdac05bf2950_1_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A pixel art depiction of a space station, with blocky shapes and limited colors that create a retro and futuristic feel."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

APixelArtDepictionOfASpaceStationWithBlocky7c807864D2a14217A8b0Acdac05bf2950_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
APixelArtDepictionOfASpaceStationWithBlocky7c807864D2a14217A8b0Acdac05bf2950_1_Image.colorStats = {
    averageColor: Color.fromHex('#29334b'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#002200'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#bb3344'), Color.fromHex('#99ffff')],
    minmaxGreen: [Color.fromHex('#559955'), Color.fromHex('#bb66ff')],
    minmaxBlue: [Color.fromHex('#444499'), Color.fromHex('#ffff99')],
    mostFrequentColor: Color.fromHex('#001122'),
    mostSaturatedColor: Color.fromHex('#001133'),
    mostGroupedColor: Color.fromHex('#111133'),
    bottom: {
        averageColor: Color.fromHex('#222744'),
        lightestColor: Color.fromHex('#ffeeff'),
        darkestColor: Color.fromHex('#001100'),
        minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000011')],
        minmaxRed: [Color.fromHex('#bb3344'), Color.fromHex('#eeffff')],
        minmaxGreen: [Color.fromHex('#778855'), Color.fromHex('#bb66ff')],
        minmaxBlue: [Color.fromHex('#444499'), Color.fromHex('#ffffee')],
        mostFrequentColor: Color.fromHex('#001122'),
        mostSaturatedColor: Color.fromHex('#001133'),
        mostGroupedColor: Color.fromHex('#111133'),
    },
} satisfies IImageColorStats;
