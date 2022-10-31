import { Inject, Injectable, Optional } from '@angular/core';
import { GoogleTagManagerConfiguration } from './angular-google-tag-manager-config.service';
import * as i0 from "@angular/core";
import * as i1 from "./angular-google-tag-manager-config.service";
export class GoogleTagManagerService {
    constructor(googleTagManagerConfiguration, googleTagManagerId, googleTagManagerAuth, googleTagManagerPreview, googleTagManagerResourcePath, googleTagManagerCSPNonce) {
        this.googleTagManagerConfiguration = googleTagManagerConfiguration;
        this.googleTagManagerId = googleTagManagerId;
        this.googleTagManagerAuth = googleTagManagerAuth;
        this.googleTagManagerPreview = googleTagManagerPreview;
        this.googleTagManagerResourcePath = googleTagManagerResourcePath;
        this.googleTagManagerCSPNonce = googleTagManagerCSPNonce;
        this.isLoaded = false;
        this.browserGlobals = {
            windowRef() {
                return window;
            },
            documentRef() {
                return document;
            },
        };
        this.config = this.googleTagManagerConfiguration?.get();
        if (this.config == null) {
            this.config = { id: null };
        }
        this.config = {
            ...this.config,
            id: googleTagManagerId || this.config.id,
            gtm_auth: googleTagManagerAuth || this.config.gtm_auth,
            gtm_preview: googleTagManagerPreview || this.config.gtm_preview,
            gtm_resource_path: googleTagManagerResourcePath || this.config.gtm_resource_path,
        };
        if (this.config.id == null) {
            throw new Error('Google tag manager ID not provided.');
        }
    }
    getDataLayer() {
        const window = this.browserGlobals.windowRef();
        window.dataLayer = window.dataLayer || [];
        return window.dataLayer;
    }
    pushOnDataLayer(obj) {
        const dataLayer = this.getDataLayer();
        dataLayer.push(obj);
    }
    addGtmToDom() {
        return new Promise((resolve, reject) => {
            if (this.isLoaded) {
                return resolve(this.isLoaded);
            }
            const doc = this.browserGlobals.documentRef();
            this.pushOnDataLayer({
                'gtm.start': new Date().getTime(),
                event: 'gtm.js',
            });
            const gtmScript = doc.createElement('script');
            gtmScript.id = 'GTMscript';
            gtmScript.async = true;
            gtmScript.src = this.applyGtmQueryParams(this.config.gtm_resource_path
                ? this.config.gtm_resource_path
                : 'https://www.googletagmanager.com/gtm.js');
            gtmScript.addEventListener('load', () => {
                return resolve((this.isLoaded = true));
            });
            gtmScript.addEventListener('error', () => {
                return reject(false);
            });
            if (this.googleTagManagerCSPNonce) {
                gtmScript.setAttribute('nonce', this.googleTagManagerCSPNonce);
            }
            doc.head.insertBefore(gtmScript, doc.head.firstChild);
        });
    }
    pushTag(item) {
        return new Promise((resolve, reject) => {
            if (!this.isLoaded) {
                this.addGtmToDom()
                    .then(() => {
                    this.pushOnDataLayer(item);
                    return resolve();
                })
                    .catch(() => reject());
            }
            else {
                this.pushOnDataLayer(item);
                return resolve();
            }
        });
    }
    applyGtmQueryParams(url) {
        if (url.indexOf('?') === -1) {
            url += '?';
        }
        return (url +
            Object.keys(this.config)
                .filter((k) => this.config[k])
                .map((k) => `${k}=${this.config[k]}`)
                .join('&'));
    }
}
GoogleTagManagerService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: GoogleTagManagerService, deps: [{ token: GoogleTagManagerConfiguration, optional: true }, { token: 'googleTagManagerId', optional: true }, { token: 'googleTagManagerAuth', optional: true }, { token: 'googleTagManagerPreview', optional: true }, { token: 'googleTagManagerResourcePath', optional: true }, { token: 'googleTagManagerCSPNonce', optional: true }], target: i0.ɵɵFactoryTarget.Injectable });
GoogleTagManagerService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: GoogleTagManagerService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: GoogleTagManagerService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: i1.GoogleTagManagerConfiguration, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [GoogleTagManagerConfiguration]
                }] }, { type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: ['googleTagManagerId']
                }] }, { type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: ['googleTagManagerAuth']
                }] }, { type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: ['googleTagManagerPreview']
                }] }, { type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: ['googleTagManagerResourcePath']
                }] }, { type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: ['googleTagManagerCSPNonce']
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1nb29nbGUtdGFnLW1hbmFnZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2FuZ3VsYXItZ29vZ2xlLXRhZy1tYW5hZ2VyL3NyYy9saWIvYW5ndWxhci1nb29nbGUtdGFnLW1hbmFnZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sNkNBQTZDLENBQUM7OztBQU01RixNQUFNLE9BQU8sdUJBQXVCO0lBYWxDLFlBR1MsNkJBQTRELEVBQ2xCLGtCQUEwQixFQUdwRSxvQkFBNEIsRUFHNUIsdUJBQStCLEVBRy9CLDRCQUFvQyxFQUdwQyx3QkFBZ0M7UUFiaEMsa0NBQTZCLEdBQTdCLDZCQUE2QixDQUErQjtRQUNsQix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQVE7UUFHcEUseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFRO1FBRzVCLDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBUTtRQUcvQixpQ0FBNEIsR0FBNUIsNEJBQTRCLENBQVE7UUFHcEMsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUFRO1FBNUJqQyxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBR2pCLG1CQUFjLEdBQUc7WUFDdkIsU0FBUztnQkFDUCxPQUFPLE1BQU0sQ0FBQztZQUNoQixDQUFDO1lBQ0QsV0FBVztnQkFDVCxPQUFPLFFBQVEsQ0FBQztZQUNsQixDQUFDO1NBQ0YsQ0FBQztRQW9CQSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyw2QkFBNkIsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUN4RCxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFF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QUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzswQkFlSSxRQUFROzswQkFDUixNQUFNOzJCQUFDLDZCQUE2Qjs7MEJBRXBDLFFBQVE7OzBCQUFJLE1BQU07MkJBQUMsb0JBQW9COzswQkFDdkMsUUFBUTs7MEJBQ1IsTUFBTTsyQkFBQyxzQkFBc0I7OzBCQUU3QixRQUFROzswQkFDUixNQUFNOzJCQUFDLHlCQUF5Qjs7MEJBRWhDLFFBQVE7OzBCQUNSLE1BQU07MkJBQUMsOEJBQThCOzswQkFFckMsUUFBUTs7MEJBQ1IsTUFBTTsyQkFBQywwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBHb29nbGVUYWdNYW5hZ2VyQ29uZmlndXJhdGlvbiB9IGZyb20gJy4vYW5ndWxhci1nb29nbGUtdGFnLW1hbmFnZXItY29uZmlnLnNlcnZpY2UnO1xuaW1wb3J0IHsgR29vZ2xlVGFnTWFuYWdlckNvbmZpZyB9IGZyb20gJy4vZ29vZ2xlLXRhZy1tYW5hZ2VyLWNvbmZpZyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBHb29nbGVUYWdNYW5hZ2VyU2VydmljZSB7XG4gIHByaXZhdGUgaXNMb2FkZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBjb25maWc6IEdvb2dsZVRhZ01hbmFnZXJDb25maWcgfCBudWxsO1xuXG4gIHByaXZhdGUgYnJvd3Nlckdsb2JhbHMgPSB7XG4gICAgd2luZG93UmVmKCk6IGFueSB7XG4gICAgICByZXR1cm4gd2luZG93O1xuICAgIH0sXG4gICAgZG9jdW1lbnRSZWYoKTogYW55IHtcbiAgICAgIHJldHVybiBkb2N1bWVudDtcbiAgICB9LFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpXG4gICAgQEluamVjdChHb29nbGVUYWdNYW5hZ2VyQ29uZmlndXJhdGlvbilcbiAgICBwdWJsaWMgZ29vZ2xlVGFnTWFuYWdlckNvbmZpZ3VyYXRpb246IEdvb2dsZVRhZ01hbmFnZXJDb25maWd1cmF0aW9uLFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoJ2dvb2dsZVRhZ01hbmFnZXJJZCcpIHB1YmxpYyBnb29nbGVUYWdNYW5hZ2VySWQ6IHN0cmluZyxcbiAgICBAT3B0aW9uYWwoKVxuICAgIEBJbmplY3QoJ2dvb2dsZVRhZ01hbmFnZXJBdXRoJylcbiAgICBwdWJsaWMgZ29vZ2xlVGFnTWFuYWdlckF1dGg6IHN0cmluZyxcbiAgICBAT3B0aW9uYWwoKVxuICAgIEBJbmplY3QoJ2dvb2dsZVRhZ01hbmFnZXJQcmV2aWV3JylcbiAgICBwdWJsaWMgZ29vZ2xlVGFnTWFuYWdlclByZXZpZXc6IHN0cmluZyxcbiAgICBAT3B0aW9uYWwoKVxuICAgIEBJbmplY3QoJ2dvb2dsZVRhZ01hbmFnZXJSZXNvdXJjZVBhdGgnKVxuICAgIHB1YmxpYyBnb29nbGVUYWdNYW5hZ2VyUmVzb3VyY2VQYXRoOiBzdHJpbmcsXG4gICAgQE9wdGlvbmFsKClcbiAgICBASW5qZWN0KCdnb29nbGVUYWdNYW5hZ2VyQ1NQTm9uY2UnKVxuICAgIHB1YmxpYyBnb29nbGVUYWdNYW5hZ2VyQ1NQTm9uY2U6IHN0cmluZ1xuICApIHtcbiAgICB0aGlzLmNvbmZpZyA9IHRoaXMuZ29vZ2xlVGFnTWFuYWdlckNvbmZpZ3VyYXRpb24/LmdldCgpO1xuICAgIGlmICh0aGlzLmNvbmZpZyA9PSBudWxsKSB7XG4gICAgICB0aGlzLmNvbmZpZyA9IHsgaWQ6IG51bGwgfTtcbiAgICB9XG5cbiAgICB0aGlzLmNvbmZpZyA9IHtcbiAgICAgIC4uLnRoaXMuY29uZmlnLFxuICAgICAgaWQ6IGdvb2dsZVRhZ01hbmFnZXJJZCB8fCB0aGlzLmNvbmZpZy5pZCxcbiAgICAgIGd0bV9hdXRoOiBnb29nbGVUYWdNYW5hZ2VyQXV0aCB8fCB0aGlzLmNvbmZpZy5ndG1fYXV0aCxcbiAgICAgIGd0bV9wcmV2aWV3OiBnb29nbGVUYWdNYW5hZ2VyUHJldmlldyB8fCB0aGlzLmNvbmZpZy5ndG1fcHJldmlldyxcbiAgICAgIGd0bV9yZXNvdXJjZV9wYXRoOlxuICAgICAgICBnb29nbGVUYWdNYW5hZ2VyUmVzb3VyY2VQYXRoIHx8IHRoaXMuY29uZmlnLmd0bV9yZXNvdXJjZV9wYXRoLFxuICAgIH07XG4gICAgaWYgKHRoaXMuY29uZmlnLmlkID09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignR29vZ2xlIHRhZyBtYW5hZ2VyIElEIG5vdCBwcm92aWRlZC4nKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0RGF0YUxheWVyKCk6IGFueVtdIHtcbiAgICBjb25zdCB3aW5kb3cgPSB0aGlzLmJyb3dzZXJHbG9iYWxzLndpbmRvd1JlZigpO1xuICAgIHdpbmRvdy5kYXRhTGF5ZXIgPSB3aW5kb3cuZGF0YUxheWVyIHx8IFtdO1xuICAgIHJldHVybiB3aW5kb3cuZGF0YUxheWVyO1xuICB9XG5cbiAgcHJpdmF0ZSBwdXNoT25EYXRhTGF5ZXIob2JqOiBvYmplY3QpOiB2b2lkIHtcbiAgICBjb25zdCBkYXRhTGF5ZXIgPSB0aGlzLmdldERhdGFMYXllcigpO1xuICAgIGRhdGFMYXllci5wdXNoKG9iaik7XG4gIH1cblxuICBwdWJsaWMgYWRkR3RtVG9Eb20oKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmICh0aGlzLmlzTG9hZGVkKSB7XG4gICAgICAgIHJldHVybiByZXNvbHZlKHRoaXMuaXNMb2FkZWQpO1xuICAgICAgfVxuICAgICAgY29uc3QgZG9jID0gdGhpcy5icm93c2VyR2xvYmFscy5kb2N1bWVudFJlZigpO1xuICAgICAgdGhpcy5wdXNoT25EYXRhTGF5ZXIoe1xuICAgICAgICAnZ3RtLnN0YXJ0JzogbmV3IERhdGUoKS5nZXRUaW1lKCksXG4gICAgICAgIGV2ZW50OiAnZ3RtLmpzJyxcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBndG1TY3JpcHQgPSBkb2MuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICBndG1TY3JpcHQuaWQgPSAnR1RNc2NyaXB0JztcbiAgICAgIGd0bVNjcmlwdC5hc3luYyA9IHRydWU7XG4gICAgICBndG1TY3JpcHQuc3JjID0gdGhpcy5hcHBseUd0bVF1ZXJ5UGFyYW1zKFxuICAgICAgICB0aGlzLmNvbmZpZy5ndG1fcmVzb3VyY2VfcGF0aFxuICAgICAgICAgID8gdGhpcy5jb25maWcuZ3RtX3Jlc291cmNlX3BhdGhcbiAgICAgICAgICA6ICdodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbS9ndG0uanMnXG4gICAgICApO1xuICAgICAgZ3RtU2NyaXB0LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgICAgIHJldHVybiByZXNvbHZlKCh0aGlzLmlzTG9hZGVkID0gdHJ1ZSkpO1xuICAgICAgfSk7XG4gICAgICBndG1TY3JpcHQuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCAoKSA9PiB7XG4gICAgICAgIHJldHVybiByZWplY3QoZmFsc2UpO1xuICAgICAgfSk7XG4gICAgICBpZiAodGhpcy5nb29nbGVUYWdNYW5hZ2VyQ1NQTm9uY2UpIHtcbiAgICAgICAgZ3RtU2NyaXB0LnNldEF0dHJpYnV0ZSgnbm9uY2UnLCB0aGlzLmdvb2dsZVRhZ01hbmFnZXJDU1BOb25jZSk7XG4gICAgICB9XG4gICAgICBkb2MuaGVhZC5pbnNlcnRCZWZvcmUoZ3RtU2NyaXB0LCBkb2MuaGVhZC5maXJzdENoaWxkKTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBwdXNoVGFnKGl0ZW06IG9iamVjdCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAoIXRoaXMuaXNMb2FkZWQpIHtcbiAgICAgICAgdGhpcy5hZGRHdG1Ub0RvbSgpXG4gICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wdXNoT25EYXRhTGF5ZXIoaXRlbSk7XG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSgpO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKCgpID0+IHJlamVjdCgpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucHVzaE9uRGF0YUxheWVyKGl0ZW0pO1xuICAgICAgICByZXR1cm4gcmVzb2x2ZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBhcHBseUd0bVF1ZXJ5UGFyYW1zKHVybDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBpZiAodXJsLmluZGV4T2YoJz8nKSA9PT0gLTEpIHtcbiAgICAgIHVybCArPSAnPyc7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIHVybCArXG4gICAgICBPYmplY3Qua2V5cyh0aGlzLmNvbmZpZylcbiAgICAgICAgLmZpbHRlcigoaykgPT4gdGhpcy5jb25maWdba10pXG4gICAgICAgIC5tYXAoKGspID0+IGAke2t9PSR7dGhpcy5jb25maWdba119YClcbiAgICAgICAgLmpvaW4oJyYnKVxuICAgICk7XG4gIH1cbn1cbiJdfQ==