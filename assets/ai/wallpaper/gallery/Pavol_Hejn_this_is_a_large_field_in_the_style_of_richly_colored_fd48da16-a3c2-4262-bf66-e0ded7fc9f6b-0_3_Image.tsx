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
import metadata from './Pavol_Hejn_this_is_a_large_field_in_the_style_of_richly_colored_fd48da16-a3c2-4262-bf66-e0ded7fc9f6b-0_3.json';
import source from './Pavol_Hejn_this_is_a_large_field_in_the_style_of_richly_colored_fd48da16-a3c2-4262-bf66-e0ded7fc9f6b-0_3.png';

/**
 * Image of this is a large field, in the style of richly colored skies, light pink and dark green, 32k uhd, kurzgesagt, františek dvořák, romanticized views, hikecore
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function ThisIsALargeFieldInTheStyleOfRichlyColoredFd48da16A3c24262Bf66E0ded7fc9f6b0_3_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="this is a large field, in the style of richly colored skies, light pink and dark green, 32k uhd, kurzgesagt, františek dvořák, romanticized views, hikecore"
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

ThisIsALargeFieldInTheStyleOfRichlyColoredFd48da16A3c24262Bf66E0ded7fc9f6b0_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ThisIsALargeFieldInTheStyleOfRichlyColoredFd48da16A3c24262Bf66E0ded7fc9f6b0_3_Image.colorStats = {
    averageColor: Color.fromHex('#85716c'),
    lightestColor: Color.fromHex('#eeffff'),
    darkestColor: Color.fromHex('#001100'),
    minmaxWhite: [Color.fromHex('#ffffee'), Color.fromHex('#001100')],
    minmaxRed: [Color.fromHex('#aa3333'), Color.fromHex('#eeffff')],
    minmaxGreen: [Color.fromHex('#668855'), Color.fromHex('#eeffff')],
    minmaxBlue: [Color.fromHex('#335566'), Color.fromHex('#ffffee')],
    mostFrequentColor: Color.fromHex('#333333'),
    mostSaturatedColor: Color.fromHex('#002211'),
    mostGroupedColor: Color.fromHex('#eebbbb'),
    bottom: {
        averageColor: Color.fromHex('#475341'),
        lightestColor: Color.fromHex('#eeffff'),
        darkestColor: Color.fromHex('#001100'),
        minmaxWhite: [Color.fromHex('#ffffee'), Color.fromHex('#001100')],
        minmaxRed: [Color.fromHex('#774433'), Color.fromHex('#eeffff')],
        minmaxGreen: [Color.fromHex('#668855'), Color.fromHex('#eeffff')],
        minmaxBlue: [Color.fromHex('#445566'), Color.fromHex('#ffffee')],
        mostFrequentColor: Color.fromHex('#333333'),
        mostSaturatedColor: Color.fromHex('#002211'),
        mostGroupedColor: Color.fromHex('#223333'),
    },
} satisfies IImageColorStats;