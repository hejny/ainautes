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
import metadata from './Pavol_Hejn_a_wallpaper_with_a_graph_of_data_visualization_in_a__650472f6-6660-4a4e-80a1-66b7436f729d-0_3.json';
import source from './Pavol_Hejn_a_wallpaper_with_a_graph_of_data_visualization_in_a__650472f6-6660-4a4e-80a1-66b7436f729d-0_3.png';

/**
 * Image of A wallpaper with a graph of data visualization, in a minimalist and modern design.
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function AWallpaperWithAGraphOfDataVisualizationInA650472f666604a4e80a166b7436f729d0_3_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A wallpaper with a graph of data visualization, in a minimalist and modern design."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AWallpaperWithAGraphOfDataVisualizationInA650472f666604a4e80a166b7436f729d0_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AWallpaperWithAGraphOfDataVisualizationInA650472f666604a4e80a166b7436f729d0_3_Image.colorStats = {
    averageColor: Color.fromHex('#8a7f74'),
    lightestColor: Color.fromHex('#eedddd'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#eedddd'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#cc6644'), Color.fromHex('#ccdddd')],
    minmaxGreen: [Color.fromHex('#777755'), Color.fromHex('#eedddd')],
    minmaxBlue: [Color.fromHex('#334477'), Color.fromHex('#eeddbb')],
    mostFrequentColor: Color.fromHex('#554433'),
    mostSaturatedColor: Color.fromHex('#110000'),
    mostGroupedColor: Color.fromHex('#aa9988'),
    bottom: {
        averageColor: Color.fromHex('#8a7d6f'),
        lightestColor: Color.fromHex('#ddcccc'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#ddddcc'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#cc6644'), Color.fromHex('#ddddcc')],
        minmaxGreen: [Color.fromHex('#777755'), Color.fromHex('#110011')],
        minmaxBlue: [Color.fromHex('#444455'), Color.fromHex('#ddddcc')],
        mostFrequentColor: Color.fromHex('#554433'),
        mostSaturatedColor: Color.fromHex('#000011'),
        mostGroupedColor: Color.fromHex('#ccccbb'),
    },
} satisfies IImageColorStats;
