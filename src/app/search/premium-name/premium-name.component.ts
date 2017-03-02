// Copyright 2017 Donuts Inc. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { Component, OnInit, Input } from '@angular/core';
import { CategorizedPremiumName } from '../../model/categorized-premium-name.model';

@Component({
  selector: 'app-premium-name',
  templateUrl: './premium-name.component.html',
  styleUrls: ['./premium-name.component.css']
})
export class PremiumNameComponent implements OnInit {
  errorMessage: string;
  @Input() premiumNames: CategorizedPremiumName[];
  constructor() { }

  ngOnInit() {
  }

}