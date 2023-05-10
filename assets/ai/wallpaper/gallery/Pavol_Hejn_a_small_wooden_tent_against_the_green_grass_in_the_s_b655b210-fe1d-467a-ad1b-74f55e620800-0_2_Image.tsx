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
import metadata from './Pavol_Hejn_a_small_wooden_tent_against_the_green_grass_in_the_s_b655b210-fe1d-467a-ad1b-74f55e620800-0_2.json';
import source from './Pavol_Hejn_a_small_wooden_tent_against_the_green_grass_in_the_s_b655b210-fe1d-467a-ad1b-74f55e620800-0_2.png';

/**
 * Image of a small wooden tent against the green grass, in the style of glass fragments art, constantin brancusi, symmetrical balance, contemporary canadian art, security camera, elfriede lohse-wächtler, stone
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function ASmallWoodenTentAgainstTheGreenGrassInTheSB655b210Fe1d467aAd1b74f55e6208000_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="a small wooden tent against the green grass, in the style of glass fragments art, constantin brancusi, symmetrical balance, contemporary canadian art, security camera, elfriede lohse-wächtler, stone"
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

ASmallWoodenTentAgainstTheGreenGrassInTheSB655b210Fe1d467aAd1b74f55e6208000_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ASmallWoodenTentAgainstTheGreenGrassInTheSB655b210Fe1d467aAd1b74f55e6208000_2_Image.colorStats = {
    averageColor: Color.fromHex('#474c24'),
    lightestColor: Color.fromHex('#eeeeee'),
    darkestColor: Color.fromHex('#001100'),
    minmaxWhite: [Color.fromHex('#eeeeee'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#884422'), Color.fromHex('#bbeeee')],
    minmaxGreen: [Color.fromHex('#77aa33'), Color.fromHex('#ffeedd')],
    minmaxBlue: [Color.fromHex('#335577'), Color.fromHex('#eeff88')],
    mostFrequentColor: Color.fromHex('#333311'),
    mostSaturatedColor: Color.fromHex('#001111'),
    mostGroupedColor: Color.fromHex('#111111'),
    bottom: {
        averageColor: Color.fromHex('#4a4e19'),
        lightestColor: Color.fromHex('#ffeedd'),
        darkestColor: Color.fromHex('#001100'),
        minmaxWhite: [Color.fromHex('#ffeedd'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#995522'), Color.fromHex('#eeeedd')],
        minmaxGreen: [Color.fromHex('#77aa33'), Color.fromHex('#ffeedd')],
        minmaxBlue: [Color.fromHex('#445555'), Color.fromHex('#ffeebb')],
        mostFrequentColor: Color.fromHex('#333311'),
        mostSaturatedColor: Color.fromHex('#667700'),
        mostGroupedColor: Color.fromHex('#111111'),
    },
} satisfies IImageColorStats;