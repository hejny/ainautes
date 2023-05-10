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
import metadata from './Pavol_Hejn_a_photograph_of_a_desert_landscape_at_sunset_with_wa_c4ebe2a3-ba9a-4276-bc44-42e503d0d5dc-0_1.json';
import source from './Pavol_Hejn_a_photograph_of_a_desert_landscape_at_sunset_with_wa_c4ebe2a3-ba9a-4276-bc44-42e503d0d5dc-0_1.png';

/**
 * Image of A photograph of a desert landscape at sunset, with warm colors and long shadows.
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function APhotographOfADesertLandscapeAtSunsetWithWaC4ebe2a3Ba9a4276Bc4442e503d0d5dc0_1_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A photograph of a desert landscape at sunset, with warm colors and long shadows."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

APhotographOfADesertLandscapeAtSunsetWithWaC4ebe2a3Ba9a4276Bc4442e503d0d5dc0_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
APhotographOfADesertLandscapeAtSunsetWithWaC4ebe2a3Ba9a4276Bc4442e503d0d5dc0_1_Image.colorStats = {
    averageColor: Color.fromHex('#7d6448'),
    lightestColor: Color.fromHex('#ffffee'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffffee'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#aa4411'), Color.fromHex('#ffffee')],
    minmaxGreen: [Color.fromHex('#778866'), Color.fromHex('#ffffee')],
    minmaxBlue: [Color.fromHex('#444455'), Color.fromHex('#ffffbb')],
    mostFrequentColor: Color.fromHex('#774422'),
    mostSaturatedColor: Color.fromHex('#442200'),
    mostGroupedColor: Color.fromHex('#111111'),
    bottom: {
        averageColor: Color.fromHex('#573a25'),
        lightestColor: Color.fromHex('#ffbb88'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#ffcc88'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#aa4411'), Color.fromHex('#ffcc88')],
        minmaxGreen: [Color.fromHex('#887744'), Color.fromHex('#440000')],
        minmaxBlue: [Color.fromHex('#444444'), Color.fromHex('#ffcc77')],
        mostFrequentColor: Color.fromHex('#774422'),
        mostSaturatedColor: Color.fromHex('#331100'),
        mostGroupedColor: Color.fromHex('#111111'),
    },
} satisfies IImageColorStats;