import {Component, OnInit} from "@angular/core";
import {ImageModule} from "primeng/image";
import {CarouselModule} from "primeng/carousel";
import {PieceInfo} from "../../models/PieceInfo";
import {Button} from "primeng/button";
import {OverlayPanelModule} from "primeng/overlaypanel";
import {CardModule} from "primeng/card";
import {PanelModule} from "primeng/panel";
import {DividerModule} from "primeng/divider";

@Component({
  selector: "app-rules",
  templateUrl: "./rules.component.html",
  standalone: true,
  imports: [
    ImageModule,
    CarouselModule,
    Button,
    OverlayPanelModule,
    CardModule,
    PanelModule,
    DividerModule
  ]
})
export class RulesComponent implements OnInit {

  responsiveOptions: any[] | undefined;

  protected pieces: PieceInfo[] = [
    { name: 'Pawn',
      description: 'The pawn can only move forward. On a pawns first move it can move either either one or two spaces. All following turns it can only move a single space. Pawns can only take opponents diagonal of them in the direction they are moving. ' +
        'If a pawn happens to reach the other side of the board, the player can then choose whether they would like that pawn to become a higher piece (except king).',
      image: 'https://content.instructables.com/FKK/MPU7/FD80BVWB/FKKMPU7FD80BVWB.jpg?auto=webp&frame=1&fit=bounds&md=2acaa2c8483d0b367bbe761f429b3ee6'
    },
    {
      name: 'Rook',
      description: 'Rooks can move forward, backwards, and side to side in either direction as far across the board as allowed. They are not able to move diagonally in any manner.',
      image: 'https://content.instructables.com/FD2/2QAF/FD80BVW9/FD22QAFFD80BVW9.jpg?auto=webp&frame=1&fit=bounds&md=2acaa2c8483d0b367bbe761f429b3ee6'
    },
    {
      name: 'Knight',
      description: 'For lack of a better word, knights posess the ability to "jump" over other pieces. They are not limited by pieces occupying squares inbetween them, and where they intend to move. ' +
        'Knights move in the shape of an L in any direction, with the so called "long side" of the L being attached to the knight.',
      image: 'https://content.instructables.com/FCD/CIZR/FD80BVWC/FCDCIZRFD80BVWC.jpg?auto=webp&frame=1&fit=bounds&md=2acaa2c8483d0b367bbe761f429b3ee6'
    },
    {
      name: 'Bishop',
      description: 'Bishops can move diagonally in any direction as far as they are able to.',
      image: 'https://content.instructables.com/F6K/KO40/FD80BVW6/F6KKO40FD80BVW6.jpg?auto=webp&frame=1&fit=bounds&md=2acaa2c8483d0b367bbe761f429b3ee6'
    },
    {
      name: 'Queen',
      description: 'The Queen possesses the ability of both the Rook and the Bishop, being able to move in either straight or diagonal lines all across the board.',
      image: 'https://content.instructables.com/F6H/BZ4B/FD80BVWA/F6HBZ4BFD80BVWA.jpg?auto=webp&frame=1&fit=bounds&md=2acaa2c8483d0b367bbe761f429b3ee6'
    },
    {
      name: 'King',
      description: 'The King can move in any direction, but only a single square away from his current position. A King is not able to move to any square that would put them in danger from an opponents attack',
      image: 'https://content.instructables.com/FDX/XW0L/FD80BW5L/FDXXW0LFD80BW5L.jpg?auto=webp&frame=1&fit=bounds&md=5026a7997290ccb56bac535be003deb4'
    }
  ];

  ngOnInit() {
    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }
}
