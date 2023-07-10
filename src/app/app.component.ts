import { Component, ViewChild } from '@angular/core';
import { DxTreeViewComponent } from 'devextreme-angular';
import { ToastrService } from 'ngx-toastr';

export class Employee {
  id: number;

  fullName: string;

  prefix: string;

  position: string;

  expanded?: boolean;

  selected?: boolean;

  items?: Employee[];
}

const employees: Employee[] = [{
  id: 1,
  fullName: 'John Heart',
  prefix: 'Dr.',
  position: 'CEO',
  expanded: true,
  items: [{
    id: 2,
    fullName: 'Samantha Bright',
    prefix: 'Dr.',
    position: 'COO',
    expanded: true,
    items: [{
      id: 3,
      fullName: 'Kevin Carter',
      prefix: 'Mr.',
      position: 'Shipping Manager',
    }, {
      id: 14,
      fullName: 'Victor Norris',
      prefix: 'Mr.',
      selected: true,
      position: 'Shipping Assistant',
    }],
  }, {
    id: 4,
    fullName: 'Brett Wade',
    prefix: 'Mr.',
    position: 'IT Manager',
    expanded: true,
    items: [{
      id: 5,
      fullName: 'Amelia Harper',
      prefix: 'Mrs.',
      position: 'Network Admin',
    }, {
      id: 6,
      fullName: 'Wally Hobbs',
      prefix: 'Mr.',
      position: 'Programmer',
    }, {
      id: 7,
      fullName: 'Brad Jameson',
      prefix: 'Mr.',
      position: 'Programmer',
    }, {
      id: 8,
      fullName: 'Violet Bailey',
      prefix: 'Ms.',
      position: 'Jr Graphic Designer',
    }],
  }, {
    id: 9,
    fullName: 'Barb Banks',
    prefix: 'Mrs.',
    position: 'Support Manager',
    expanded: true,
    items: [{
      id: 10,
      fullName: 'Kelly Rodriguez',
      prefix: 'Ms.',
      position: 'Support Assistant',
    }, {
      id: 11,
      fullName: 'James Anderson',
      prefix: 'Mr.',
      position: 'Support Assistant',
    }],
  }],
}];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(DxTreeViewComponent, { static: false }) treeView: DxTreeViewComponent;

  employees: Employee[];

  selectedEmployees: Employee[] = [];

  showCheckBoxesModes: string[] = ['normal', 'selectAll', 'none'];

  showCheckBoxesMode: string = this.showCheckBoxesModes[0];

  selectionModes: string[] = ['multiple', 'single'];

  selectionMode: string = this.selectionModes[0];

  selectNodesRecursive = true;

  selectByClick = false;

  isRecursiveDisabled = false;

  isSelectionModeDisabled = false;

  constructor() {
    this.employees = employees;
  }

  treeViewSelectionChanged(e: any) {
    this.syncSelection(e.component);
  }

  treeViewContentReady(e: any) {
    this.syncSelection(e.component);
  }

  syncSelection(treeView: any) {
    const selectedEmployees = treeView.getSelectedNodes()
      .map((node: any) => node.itemData);

    this.selectedEmployees = selectedEmployees;
  }

  showCheckBoxesModeValueChanged(e: any) {
    this.showCheckBoxesMode = e.value;
    this.isSelectionModeDisabled = e.value === 'selectAll';
    if (e.value === 'selectAll') {
      this.selectionMode = 'multiple';
      this.isRecursiveDisabled = false;
    }
  }

  selectionModeValueChanged(e: any) {
    this.selectionMode = e.value;
    this.isRecursiveDisabled = e.value === 'single';
    if (e.value === 'single') {
      this.selectNodesRecursive = false;
      this.treeView.instance.unselectAll();
    }
  }
}
