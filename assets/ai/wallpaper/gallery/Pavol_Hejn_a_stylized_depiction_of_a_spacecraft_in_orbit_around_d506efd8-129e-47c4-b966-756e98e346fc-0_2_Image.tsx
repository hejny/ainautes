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
import metadata from './Pavol_Hejn_a_stylized_depiction_of_a_spacecraft_in_orbit_around_d506efd8-129e-47c4-b966-756e98e346fc-0_2.json';
import source from './Pavol_Hejn_a_stylized_depiction_of_a_spacecraft_in_orbit_around_d506efd8-129e-47c4-b966-756e98e346fc-0_2.png';

/**
 * Image of A stylized depiction of a spacecraft in orbit around a distant planet or moon, with dramatic lighting and shadows.
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function AStylizedDepictionOfASpacecraftInOrbitAroundD506efd8129e47c4B966756e98e346fc0_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A stylized depiction of a spacecraft in orbit around a distant planet or moon, with dramatic lighting and shadows."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AStylizedDepictionOfASpacecraftInOrbitAroundD506efd8129e47c4B966756e98e346fc0_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AStylizedDepictionOfASpacecraftInOrbitAroundD506efd8129e47c4B966756e98e346fc0_2_Image.colorStats = {
    averageColor: Color.fromHex('#181c22'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#993333'), Color.fromHex('#ccffff')],
    minmaxGreen: [Color.fromHex('#667766'), Color.fromHex('#ffeeff')],
    minmaxBlue: [Color.fromHex('#225588'), Color.fromHex('#ffff88')],
    mostFrequentColor: Color.fromHex('#000000'),
    mostSaturatedColor: Color.fromHex('#001111'),
    mostGroupedColor: Color.fromHex('#000000'),
    bottom: {
        averageColor: Color.fromHex('#070a13'),
        lightestColor: Color.fromHex('#ffffff'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#554433'), Color.fromHex('#ccffff')],
        minmaxGreen: [Color.fromHex('#557777'), Color.fromHex('#ffffff')],
        minmaxBlue: [Color.fromHex('#225588'), Color.fromHex('#ffffff')],
        mostFrequentColor: Color.fromHex('#000000'),
        mostSaturatedColor: Color.fromHex('#000011'),
        mostGroupedColor: Color.fromHex('#000000'),
    },
} satisfies IImageColorStats;
