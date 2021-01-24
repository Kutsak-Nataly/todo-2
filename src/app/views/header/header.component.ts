import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SettingsDialogComponent} from '../../dialog/settings-dialog/settings-dialog.component';
import {MatDialog} from '@angular/material/dialog';
import {IntroService} from '../../service/intro.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  @Input()
  categoryName: string;

  @Output()
  toggleMenu = new EventEmitter(); // показать/скрыть статистику

  @Output()
  toggleStat = new EventEmitter<boolean>(); // показать/скрыть статистику
  @Input()
  private showStat: boolean;

  constructor(
    private dialog: MatDialog,
    private introService: IntroService
  ) {
  }

  ngOnInit() {
  }

  private onToggleStat(): void {
    this.toggleStat.emit(!this.showStat); // вкл/выкл статистику
  }

  // окно настроек
  private showSettings(): void {
    const dialogRef = this.dialog.open(SettingsDialogComponent,
      {
        autoFocus: false,
        width: '500px'
      });

    // никаких действий не требуется после закрытия окна

  }

  private showIntroHelp() {
    this.introService.startIntroJS(false);
  }

  private onToggleMenu() {
    this.toggleMenu.emit(); // показать/скрыть меню
  }


}