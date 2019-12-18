import { animate, keyframes, query, stagger, style, transition, trigger, group } from '@angular/animations';

export const fadeIn = trigger('fadeIn', [
    transition(':leave', [
        animate('300ms ease-in', keyframes([
            style({
                opacity: 1,
            }),
            style({
                opacity: 0,
            })
        ]))
    ]),
    transition(':enter', [
        animate('700ms ease-in', keyframes([
            style({
                opacity: 0,
            }),
            style({
                opacity: 1,
            })
        ]))
    ])
]);

export const slideIn = trigger('slideIn', [
    transition(':leave', [
        animate('300ms ease-in', keyframes([
            style({
                opacity: 1,
                transform: 'translateY(0)',
            }),
            style({
                opacity: 0,
                transform: 'translateY(100px)',
            })
        ]))
    ]),
    transition(':enter', [
        animate('700ms ease-in', keyframes([
            style({
                opacity: 0,
                transform: 'translateY(100px)',
            }),
            style({
                opacity: 1,
                transform: 'translateY(0)',

            })
        ]))
    ])
]);

export const scaleOut = trigger('scaleOut', [
    transition(':leave', [
        animate('500ms ease-in', keyframes([
            style({
                transform: 'scale(1)',
                opacity: 1,
            }),
            style({
                transform: 'scale(0)',
                opacity: 0,
            })
        ]))
    ]),
]);

export const scaleIn = trigger('scaleIn', [
    transition(':enter', [
        animate('700ms ease-in', keyframes([
            style({
                transform: 'scale(0)',
                opacity: 0,
            }),
            style({
                transform: 'scale(1)',
                opacity: 1,
            })
        ]))
    ]),
]);

export const listStateTrigger = trigger('listState', [
    transition('* => *', [
        query(':enter', [
            style({
                opacity: 0,
                transform: 'translateX(-100%)'
            }),
            stagger(300, [
                animate('1100ms ease-out', keyframes([
                    style({
                        opacity: 0.5,
                        transform: 'translateX(15%)',
                        offset: 0.4
                    }),
                    style({
                        opacity: 1,
                        transform: 'translateX(0)',
                        offset: 1
                    })
                ]))
            ])
        ], { optional: true }),
        query(':leave', [
            style({
                opacity: 1,
                // transform: 'translateX(-100%)'
            }),
            stagger(300, [
                animate('800ms ease-out', keyframes([
                    style({
                        opacity: 0.5,
                        // transform: 'translateX(15%)',
                        offset: 0.4
                    }),
                    style({
                        opacity: 0,
                        // transform: 'translateX(0)',
                        offset: 1
                    })
                ]))
            ])
        ], { optional: true })
    ])
]);


export const listOpacity = trigger('listOpacity', [
    transition('* => *', [
        query(':enter', [
            style({
                opacity: 0,
            }),
            stagger(300, [
                animate('500ms ease-out', keyframes([
                    style({
                        opacity: 0.5,
                        offset: 0.4
                    }),
                    style({
                        opacity: 1,
                        offset: 1
                    })
                ]))
            ])
        ], { optional: true }),
        query(':leave', [
            style({
                opacity: 1,
            }),
            stagger(300, [
                animate('300ms ease-out', keyframes([
                    style({
                        opacity: 0.5,
                        offset: 0.4
                    }),
                    style({
                        opacity: 0,
                        offset: 1
                    })
                ]))
            ])
        ], { optional: true })
    ])
]);


export const slideInAnimation =
    trigger('routeAnimations', [
        // transition('* => *', [
        //     query(':enter, :leave',
        //         style({ display: 'block' }),
        //         { optional: true }),
        //     group([
        //         query(':enter', [
        //             style({ transform: 'translateX(-100%)' }),
        //             animate('0.5s ease-in-out',
        //                 style({ transform: 'translateX(0%)' }))
        //         ], { optional: true }),
        //         query(':leave', [
        //             style({ transform: 'translateX(0%)' }),
        //             animate('0.5s ease-in-out',
        //                 style({ transform: 'translateX(100%)' }))
        //         ], { optional: true }),
        //     ])
        // ]),
        transition('* => *', [
            query(':enter, :leave',
                style({ display: 'block' }),
                { optional: true }),
            group([
                query(':enter', [
                    style({ opacity: '0' }),
                    animate('0.5s ease-in-out',
                        style({ opacity: '1' }))
                ], { optional: true }),
                query(':leave', [
                    style({ opacity: '1' }),
                    animate('.3s ease-in-out',
                        style({ opacity: '0' }))
                ], { optional: true }),
            ])
        ])
    ]);


export const routeSlideSide =
    trigger('slideSide', [
        transition('* => *', [
            group([
                query(':enter', [
                    style({
                        opacity: 0.5,
                        transform: 'translateX(-100%)',
                        offset: 0.4
                    }),
                    animate('0.5s ease-in-out',
                    style({
                        opacity: 1,
                        transform: 'translateX(0)',
                        offset: 1
                    }))
                ], { optional: true }),

            ])
        ])
    ]);
