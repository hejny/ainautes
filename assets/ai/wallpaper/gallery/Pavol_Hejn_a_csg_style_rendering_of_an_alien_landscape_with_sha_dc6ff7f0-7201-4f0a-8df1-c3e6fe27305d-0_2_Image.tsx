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
import metadata from './Pavol_Hejn_a_csg_style_rendering_of_an_alien_landscape_with_sha_dc6ff7f0-7201-4f0a-8df1-c3e6fe27305d-0_2.json';
import source from './Pavol_Hejn_a_csg_style_rendering_of_an_alien_landscape_with_sha_dc6ff7f0-7201-4f0a-8df1-c3e6fe27305d-0_2.png';

/**
 * Image of A csg-style rendering of an alien landscape, with sharp angles and contrasting colors that create a futuristic and industrial vibe.
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function ACsgStyleRenderingOfAnAlienLandscapeWithShaDc6ff7f072014f0a8df1C3e6fe27305d0_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A csg-style rendering of an alien landscape, with sharp angles and contrasting colors that create a futuristic and industrial vibe."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

ACsgStyleRenderingOfAnAlienLandscapeWithShaDc6ff7f072014f0a8df1C3e6fe27305d0_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ACsgStyleRenderingOfAnAlienLandscapeWithShaDc6ff7f072014f0a8df1C3e6fe27305d0_2_Image.colorStats = {
    averageColor: Color.fromHex('#6c7075'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#cc3333'), Color.fromHex('#11ccee')],
    minmaxGreen: [Color.fromHex('#44bb77'), Color.fromHex('#ffeeff')],
    minmaxBlue: [Color.fromHex('#3366aa'), Color.fromHex('#ffffdd')],
    mostFrequentColor: Color.fromHex('#111122'),
    mostSaturatedColor: Color.fromHex('#000011'),
    mostGroupedColor: Color.fromHex('#6699aa'),
    bottom: {
        averageColor: Color.fromHex('#584e51'),
        lightestColor: Color.fromHex('#ffffff'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#bb3311'), Color.fromHex('#eeffff')],
        minmaxGreen: [Color.fromHex('#778866'), Color.fromHex('#ffeeff')],
        minmaxBlue: [Color.fromHex('#114477'), Color.fromHex('#ffffdd')],
        mostFrequentColor: Color.fromHex('#111122'),
        mostSaturatedColor: Color.fromHex('#001122'),
        mostGroupedColor: Color.fromHex('#111122'),
    },
} satisfies IImageColorStats;