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
import metadata from './Pavol_Hejn_a_pixel_art_inspired_wallpaper_featuring_a_retro_sty_cc34eab4-7dfe-4d2b-83cf-57b588785c31-0_1.json';
import source from './Pavol_Hejn_a_pixel_art_inspired_wallpaper_featuring_a_retro_sty_cc34eab4-7dfe-4d2b-83cf-57b588785c31-0_1.png';

/**
 * Image of A pixel art-inspired wallpaper featuring a retro-style robot, with a limited color palette and pixelated lines.
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function APixelArtInspiredWallpaperFeaturingARetroStyCc34eab47dfe4d2b83cf57b588785c310_1_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A pixel art-inspired wallpaper featuring a retro-style robot, with a limited color palette and pixelated lines."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

APixelArtInspiredWallpaperFeaturingARetroStyCc34eab47dfe4d2b83cf57b588785c310_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
APixelArtInspiredWallpaperFeaturingARetroStyCc34eab47dfe4d2b83cf57b588785c310_1_Image.colorStats = {
    averageColor: Color.fromHex('#52565c'),
    lightestColor: Color.fromHex('#eeeeee'),
    darkestColor: Color.fromHex('#222222'),
    minmaxWhite: [Color.fromHex('#eeffee'), Color.fromHex('#002233')],
    minmaxRed: [Color.fromHex('#ff4455'), Color.fromHex('#ddffee')],
    minmaxGreen: [Color.fromHex('#66cc77'), Color.fromHex('#ff4455')],
    minmaxBlue: [Color.fromHex('#114477'), Color.fromHex('#ffee88')],
    mostFrequentColor: Color.fromHex('#113355'),
    mostSaturatedColor: Color.fromHex('#003333'),
    mostGroupedColor: Color.fromHex('#224455'),
    bottom: {
        averageColor: Color.fromHex('#2c4b58'),
        lightestColor: Color.fromHex('#eeffee'),
        darkestColor: Color.fromHex('#003333'),
        minmaxWhite: [Color.fromHex('#eeffee'), Color.fromHex('#002233')],
        minmaxRed: [Color.fromHex('#ff4455'), Color.fromHex('#ddffee')],
        minmaxGreen: [Color.fromHex('#55cc88'), Color.fromHex('#ff4455')],
        minmaxBlue: [Color.fromHex('#333366'), Color.fromHex('#eeffcc')],
        mostFrequentColor: Color.fromHex('#113355'),
        mostSaturatedColor: Color.fromHex('#003333'),
        mostGroupedColor: Color.fromHex('#224455'),
    },
} satisfies IImageColorStats;
