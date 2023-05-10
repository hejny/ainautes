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
import metadata from './Pavol_Hejn_ainauts_exploring_a_vast_network_of_tunnels_beneath__23dd2e38-a529-4e63-b9d6-19877ef9d20e-0_2.json';
import source from './Pavol_Hejn_ainauts_exploring_a_vast_network_of_tunnels_beneath__23dd2e38-a529-4e63-b9d6-19877ef9d20e-0_2.png';

/**
 * Image of AInauts exploring a vast network of tunnels beneath the surface of a distant planet, with glowing crystals all around them.
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function AinautsExploringAVastNetworkOfTunnelsBeneath3dd2e38A5294e63B9d619877ef9d20e02_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="AInauts exploring a vast network of tunnels beneath the surface of a distant planet, with glowing crystals all around them."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AinautsExploringAVastNetworkOfTunnelsBeneath3dd2e38A5294e63B9d619877ef9d20e02_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AinautsExploringAVastNetworkOfTunnelsBeneath3dd2e38A5294e63B9d619877ef9d20e02_2_Image.colorStats = {
    averageColor: Color.fromHex('#34464d'),
    lightestColor: Color.fromHex('#eeffff'),
    darkestColor: Color.fromHex('#221100'),
    minmaxWhite: [Color.fromHex('#ffffee'), Color.fromHex('#001111')],
    minmaxRed: [Color.fromHex('#cc5511'), Color.fromHex('#ccffff')],
    minmaxGreen: [Color.fromHex('#448855'), Color.fromHex('#eeffff')],
    minmaxBlue: [Color.fromHex('#115577'), Color.fromHex('#ffffee')],
    mostFrequentColor: Color.fromHex('#221111'),
    mostSaturatedColor: Color.fromHex('#002233'),
    mostGroupedColor: Color.fromHex('#112233'),
    bottom: {
        averageColor: Color.fromHex('#3d4247'),
        lightestColor: Color.fromHex('#ddeeff'),
        darkestColor: Color.fromHex('#221100'),
        minmaxWhite: [Color.fromHex('#ffeedd'), Color.fromHex('#001111')],
        minmaxRed: [Color.fromHex('#cc5511'), Color.fromHex('#ddffee')],
        minmaxGreen: [Color.fromHex('#448855'), Color.fromHex('#ddeeff')],
        minmaxBlue: [Color.fromHex('#115577'), Color.fromHex('#ffeecc')],
        mostFrequentColor: Color.fromHex('#221111'),
        mostSaturatedColor: Color.fromHex('#002233'),
        mostGroupedColor: Color.fromHex('#111111'),
    },
} satisfies IImageColorStats;