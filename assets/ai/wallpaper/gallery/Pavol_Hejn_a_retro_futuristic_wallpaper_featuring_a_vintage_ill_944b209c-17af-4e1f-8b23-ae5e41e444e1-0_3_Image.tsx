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
import metadata from './Pavol_Hejn_a_retro_futuristic_wallpaper_featuring_a_vintage_ill_944b209c-17af-4e1f-8b23-ae5e41e444e1-0_3.json';
import source from './Pavol_Hejn_a_retro_futuristic_wallpaper_featuring_a_vintage_ill_944b209c-17af-4e1f-8b23-ae5e41e444e1-0_3.png';

/**
 * Image of A retro-futuristic wallpaper featuring a vintage illustration of a robot, set against a neon-colored background.
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function ARetroFuturisticWallpaperFeaturingAVintageIll944b209c17af4e1f8b23Ae5e41e444e10_3_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A retro-futuristic wallpaper featuring a vintage illustration of a robot, set against a neon-colored background."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

ARetroFuturisticWallpaperFeaturingAVintageIll944b209c17af4e1f8b23Ae5e41e444e10_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ARetroFuturisticWallpaperFeaturingAVintageIll944b209c17af4e1f8b23Ae5e41e444e10_3_Image.colorStats = {
    averageColor: Color.fromHex('#423155'),
    lightestColor: Color.fromHex('#dddddd'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#eeffcc'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#ff2211'), Color.fromHex('#77eeee')],
    minmaxGreen: [Color.fromHex('#66aa44'), Color.fromHex('#ee0033')],
    minmaxBlue: [Color.fromHex('#1144aa'), Color.fromHex('#ffff99')],
    mostFrequentColor: Color.fromHex('#112255'),
    mostSaturatedColor: Color.fromHex('#990044'),
    mostGroupedColor: Color.fromHex('#111144'),
    bottom: {
        averageColor: Color.fromHex('#253557'),
        lightestColor: Color.fromHex('#dddddd'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#dddddd'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#ee0033'), Color.fromHex('#44dddd')],
        minmaxGreen: [Color.fromHex('#66aa44'), Color.fromHex('#ee0033')],
        minmaxBlue: [Color.fromHex('#002288'), Color.fromHex('#ffdd66')],
        mostFrequentColor: Color.fromHex('#112255'),
        mostSaturatedColor: Color.fromHex('#003355'),
        mostGroupedColor: Color.fromHex('#111144'),
    },
} satisfies IImageColorStats;