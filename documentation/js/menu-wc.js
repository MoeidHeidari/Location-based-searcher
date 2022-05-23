'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">Parloa documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CommonModule.html" data-type="entity-link" >CommonModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HealthModule.html" data-type="entity-link" >HealthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-HealthModule-b5aabe9a0d5f521ac122ccfc992289d8eb7b98b1702b05ae479193aceb6809957601977fe32ff497f96babc58feb13b235c6a06c50c4c0ed68866a8939ba74a6"' : 'data-target="#xs-controllers-links-module-HealthModule-b5aabe9a0d5f521ac122ccfc992289d8eb7b98b1702b05ae479193aceb6809957601977fe32ff497f96babc58feb13b235c6a06c50c4c0ed68866a8939ba74a6"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-HealthModule-b5aabe9a0d5f521ac122ccfc992289d8eb7b98b1702b05ae479193aceb6809957601977fe32ff497f96babc58feb13b235c6a06c50c4c0ed68866a8939ba74a6"' :
                                            'id="xs-controllers-links-module-HealthModule-b5aabe9a0d5f521ac122ccfc992289d8eb7b98b1702b05ae479193aceb6809957601977fe32ff497f96babc58feb13b235c6a06c50c4c0ed68866a8939ba74a6"' }>
                                            <li class="link">
                                                <a href="controllers/HealthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HealthController</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HttpResponseModule.html" data-type="entity-link" >HttpResponseModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-HttpResponseModule-d6be2a8c69608a8b7686646048e8e2c510d59075e4f35517549210b327a3d1a1a94a519904c1c7f952447bd9615ed0e26aa9bb8b06fa1cb16965f2476641ab9d"' : 'data-target="#xs-injectables-links-module-HttpResponseModule-d6be2a8c69608a8b7686646048e8e2c510d59075e4f35517549210b327a3d1a1a94a519904c1c7f952447bd9615ed0e26aa9bb8b06fa1cb16965f2476641ab9d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-HttpResponseModule-d6be2a8c69608a8b7686646048e8e2c510d59075e4f35517549210b327a3d1a1a94a519904c1c7f952447bd9615ed0e26aa9bb8b06fa1cb16965f2476641ab9d"' :
                                        'id="xs-injectables-links-module-HttpResponseModule-d6be2a8c69608a8b7686646048e8e2c510d59075e4f35517549210b327a3d1a1a94a519904c1c7f952447bd9615ed0e26aa9bb8b06fa1cb16965f2476641ab9d"' }>
                                        <li class="link">
                                            <a href="injectables/HttpResponseService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HttpResponseService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/IntersectionModule.html" data-type="entity-link" >IntersectionModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-IntersectionModule-f47d1574fdfd2d909302d95cbdc8beb32f04ea27b99e75de02af80c1b27f22d8d4ff292ce68f08a4f8e68c7c52609caa0acf2957e04c9540b8cd6f2fa2be907d"' : 'data-target="#xs-injectables-links-module-IntersectionModule-f47d1574fdfd2d909302d95cbdc8beb32f04ea27b99e75de02af80c1b27f22d8d4ff292ce68f08a4f8e68c7c52609caa0acf2957e04c9540b8cd6f2fa2be907d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-IntersectionModule-f47d1574fdfd2d909302d95cbdc8beb32f04ea27b99e75de02af80c1b27f22d8d4ff292ce68f08a4f8e68c7c52609caa0acf2957e04c9540b8cd6f2fa2be907d"' :
                                        'id="xs-injectables-links-module-IntersectionModule-f47d1574fdfd2d909302d95cbdc8beb32f04ea27b99e75de02af80c1b27f22d8d4ff292ce68f08a4f8e68c7c52609caa0acf2957e04c9540b8cd6f2fa2be907d"' }>
                                        <li class="link">
                                            <a href="injectables/InvitationRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InvitationRepository</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/InvitationService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InvitationService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/LoggerModule.html" data-type="entity-link" >LoggerModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-LoggerModule-3d3c499a205622e3b970140ef8e33b2a38e286655ac86b24e0162dba6e03e013317f712e52864f412c4a9bccf62f62b3ccecb47bfadc2a74b6e4150c857aab0b"' : 'data-target="#xs-injectables-links-module-LoggerModule-3d3c499a205622e3b970140ef8e33b2a38e286655ac86b24e0162dba6e03e013317f712e52864f412c4a9bccf62f62b3ccecb47bfadc2a74b6e4150c857aab0b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-LoggerModule-3d3c499a205622e3b970140ef8e33b2a38e286655ac86b24e0162dba6e03e013317f712e52864f412c4a9bccf62f62b3ccecb47bfadc2a74b6e4150c857aab0b"' :
                                        'id="xs-injectables-links-module-LoggerModule-3d3c499a205622e3b970140ef8e33b2a38e286655ac86b24e0162dba6e03e013317f712e52864f412c4a9bccf62f62b3ccecb47bfadc2a74b6e4150c857aab0b"' }>
                                        <li class="link">
                                            <a href="injectables/LoggerService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoggerService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SeederModule.html" data-type="entity-link" >SeederModule</a>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#controllers-links"' :
                                'data-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/InvitationContoller.html" data-type="entity-link" >InvitationContoller</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Customer.html" data-type="entity-link" >Customer</a>
                            </li>
                            <li class="link">
                                <a href="classes/EnvironmentVariables.html" data-type="entity-link" >EnvironmentVariables</a>
                            </li>
                            <li class="link">
                                <a href="classes/HttpResponseException.html" data-type="entity-link" >HttpResponseException</a>
                            </li>
                            <li class="link">
                                <a href="classes/InvitationResponseDTO.html" data-type="entity-link" >InvitationResponseDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/InvitationRquestDTO.html" data-type="entity-link" >InvitationRquestDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/Location.html" data-type="entity-link" >Location</a>
                            </li>
                            <li class="link">
                                <a href="classes/LocationDTO.html" data-type="entity-link" >LocationDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/SingleCustomerRequestDTO.html" data-type="entity-link" >SingleCustomerRequestDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/SingleCustomerResponseDTO.html" data-type="entity-link" >SingleCustomerResponseDTO</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/HttpResponseService.html" data-type="entity-link" >HttpResponseService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoggerInterceptor.html" data-type="entity-link" >LoggerInterceptor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoggerService.html" data-type="entity-link" >LoggerService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/RolesGuard.html" data-type="entity-link" >RolesGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/HttpResponse.html" data-type="entity-link" >HttpResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ParloaOptions.html" data-type="entity-link" >ParloaOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ValidationPipeOptions.html" data-type="entity-link" >ValidationPipeOptions</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise-inverted.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});