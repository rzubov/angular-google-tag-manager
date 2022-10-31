import { Inject, Injectable, InjectionToken, Optional } from '@angular/core';
import * as i0 from "@angular/core";
export const GoogleTagManagerConfigService = new InjectionToken('google-tag-manager-config');
// adapted from https://github.com/auth0/auth0-angular#dynamic-configuration
export class GoogleTagManagerConfiguration {
    constructor(googleTagManagerConfig) {
        this._googleTagManagerConfig = {
            id: null,
            gtm_auth: '',
            gtm_preview: '',
        };
        if (googleTagManagerConfig) {
            this.set(googleTagManagerConfig);
        }
    }
    set(googleTagManagerConfig) {
        this._googleTagManagerConfig = googleTagManagerConfig;
    }
    get() {
        return this._googleTagManagerConfig;
    }
}
GoogleTagManagerConfiguration.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: GoogleTagManagerConfiguration, deps: [{ token: GoogleTagManagerConfigService, optional: true }], target: i0.ɵɵFactoryTarget.Injectable });
GoogleTagManagerConfiguration.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: GoogleTagManagerConfiguration, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: GoogleTagManagerConfiguration, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [GoogleTagManagerConfigService]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1nb29nbGUtdGFnLW1hbmFnZXItY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9hbmd1bGFyLWdvb2dsZS10YWctbWFuYWdlci9zcmMvbGliL2FuZ3VsYXItZ29vZ2xlLXRhZy1tYW5hZ2VyLWNvbmZpZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRzdFLE1BQU0sQ0FBQyxNQUFNLDZCQUE2QixHQUN4QyxJQUFJLGNBQWMsQ0FBeUIsMkJBQTJCLENBQUMsQ0FBQztBQUUxRSw0RUFBNEU7QUFFNUUsTUFBTSxPQUFPLDZCQUE2QjtJQU94QyxZQUdJLHNCQUErQztRQVQzQyw0QkFBdUIsR0FBMkI7WUFDeEQsRUFBRSxFQUFFLElBQUk7WUFDUixRQUFRLEVBQUUsRUFBRTtZQUNaLFdBQVcsRUFBRSxFQUFFO1NBQ2hCLENBQUM7UUFPQSxJQUFJLHNCQUFzQixFQUFFO1lBQzFCLElBQUksQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQztTQUNsQztJQUNILENBQUM7SUFFTSxHQUFHLENBQUMsc0JBQThDO1FBQ3ZELElBQUksQ0FBQyx1QkFBdUIsR0FBRyxzQkFBc0IsQ0FBQztJQUN4RCxDQUFDO0lBRU0sR0FBRztRQUNSLE9BQU8sSUFBSSxDQUFDLHVCQUF1QixDQUFDO0lBQ3RDLENBQUM7OzJIQXZCVSw2QkFBNkIsa0JBUzlCLDZCQUE2QjsrSEFUNUIsNkJBQTZCLGNBRGhCLE1BQU07NEZBQ25CLDZCQUE2QjtrQkFEekMsVUFBVTttQkFBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7OzBCQVM3QixRQUFROzswQkFDUixNQUFNOzJCQUFDLDZCQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgSW5qZWN0aW9uVG9rZW4sIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBHb29nbGVUYWdNYW5hZ2VyQ29uZmlnIH0gZnJvbSAnLi9nb29nbGUtdGFnLW1hbmFnZXItY29uZmlnJztcblxuZXhwb3J0IGNvbnN0IEdvb2dsZVRhZ01hbmFnZXJDb25maWdTZXJ2aWNlID1cbiAgbmV3IEluamVjdGlvblRva2VuPEdvb2dsZVRhZ01hbmFnZXJDb25maWc+KCdnb29nbGUtdGFnLW1hbmFnZXItY29uZmlnJyk7XG5cbi8vIGFkYXB0ZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vYXV0aDAvYXV0aDAtYW5ndWxhciNkeW5hbWljLWNvbmZpZ3VyYXRpb25cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgR29vZ2xlVGFnTWFuYWdlckNvbmZpZ3VyYXRpb24ge1xuICBwcml2YXRlIF9nb29nbGVUYWdNYW5hZ2VyQ29uZmlnOiBHb29nbGVUYWdNYW5hZ2VyQ29uZmlnID0ge1xuICAgIGlkOiBudWxsLFxuICAgIGd0bV9hdXRoOiAnJyxcbiAgICBndG1fcHJldmlldzogJycsXG4gIH07XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKClcbiAgICBASW5qZWN0KEdvb2dsZVRhZ01hbmFnZXJDb25maWdTZXJ2aWNlKVxuICAgICAgZ29vZ2xlVGFnTWFuYWdlckNvbmZpZz86IEdvb2dsZVRhZ01hbmFnZXJDb25maWdcbiAgKSB7XG4gICAgaWYgKGdvb2dsZVRhZ01hbmFnZXJDb25maWcpIHtcbiAgICAgIHRoaXMuc2V0KGdvb2dsZVRhZ01hbmFnZXJDb25maWcpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzZXQoZ29vZ2xlVGFnTWFuYWdlckNvbmZpZzogR29vZ2xlVGFnTWFuYWdlckNvbmZpZyk6IHZvaWQge1xuICAgIHRoaXMuX2dvb2dsZVRhZ01hbmFnZXJDb25maWcgPSBnb29nbGVUYWdNYW5hZ2VyQ29uZmlnO1xuICB9XG5cbiAgcHVibGljIGdldCgpOiBHb29nbGVUYWdNYW5hZ2VyQ29uZmlnIHtcbiAgICByZXR1cm4gdGhpcy5fZ29vZ2xlVGFnTWFuYWdlckNvbmZpZztcbiAgfVxufVxuIl19