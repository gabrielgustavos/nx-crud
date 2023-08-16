import { InjectionToken } from '@angular/core';
import { AlertConfig, AlertOptions } from './alert.interface';

export const ALERT_DATA = new InjectionToken<AlertConfig>('ALERT_DATA');
export const ALERT_OPTIONS = new InjectionToken<AlertOptions>('ALERT_OPTIONS');
