import {Router, Request, Response, NextFunction} from 'express';

const POSTS = [
    {
        'post_title': 'Yew Bow',
        'post_id': '1',
        'post_category': 'bow',
        'post_summary': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam auctor consequat vehicula. Etiam nec nisl eget sem pellentesque bibendum vitae et enim. Etiam vel nunc purus. In consequat euismod nisl eget porttitor. Aliquam blandit tincidunt enim ut imperdiet. Mauris pretium dolor euismod fermentum aliquam. Sed molestie facilisis hendrerit. Donec consequat ultricies lobortis. Vivamus bibendum at dolor quis efficitur. Duis quis risus ac ex tristique gravida vel gravida leo. Nulla venenatis ante eget iaculis tincidunt. Duis tempor nunc in sapien porta, ac tincidunt urna blandit. Nam sem lacus, rhoncus in dapibus eu, hendrerit sed tortor. Maecenas eleifend in enim sed facilisis.'
    },
    {
        'post_title': 'Headphone Multiplexor',
        'post_id': '2',
        'post_category': 'audio',
        'post_summary': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam auctor consequat vehicula. Etiam nec nisl eget sem pellentesque bibendum vitae et enim. Etiam vel nunc purus. In consequat euismod nisl eget porttitor. Aliquam blandit tincidunt enim ut imperdiet. Mauris pretium dolor euismod fermentum aliquam. Sed molestie facilisis hendrerit. Donec consequat ultricies lobortis. Vivamus bibendum at dolor quis efficitur. Duis quis risus ac ex tristique gravida vel gravida leo. Nulla venenatis ante eget iaculis tincidunt. Duis tempor nunc in sapien porta, ac tincidunt urna blandit. Nam sem lacus, rhoncus in dapibus eu, hendrerit sed tortor. Maecenas eleifend in enim sed facilisis.'
    },
    {
        'post_title': 'Personal Website',
        'post_id': '3',
        'post_category': 'web',
        'post_summary': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam auctor consequat vehicula. Etiam nec nisl eget sem pellentesque bibendum vitae et enim. Etiam vel nunc purus. In consequat euismod nisl eget porttitor. Aliquam blandit tincidunt enim ut imperdiet. Mauris pretium dolor euismod fermentum aliquam. Sed molestie facilisis hendrerit. Donec consequat ultricies lobortis. Vivamus bibendum at dolor quis efficitur. Duis quis risus ac ex tristique gravida vel gravida leo. Nulla venenatis ante eget iaculis tincidunt. Duis tempor nunc in sapien porta, ac tincidunt urna blandit. Nam sem lacus, rhoncus in dapibus eu, hendrerit sed tortor. Maecenas eleifend in enim sed facilisis.'
    },
    {
        'post_title': 'Recurve Bow',
        'post_id': '4',
        'post_category': 'bow',
        'post_summary': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam auctor consequat vehicula. Etiam nec nisl eget sem pellentesque bibendum vitae et enim. Etiam vel nunc purus. In consequat euismod nisl eget porttitor. Aliquam blandit tincidunt enim ut imperdiet. Mauris pretium dolor euismod fermentum aliquam. Sed molestie facilisis hendrerit. Donec consequat ultricies lobortis. Vivamus bibendum at dolor quis efficitur. Duis quis risus ac ex tristique gravida vel gravida leo. Nulla venenatis ante eget iaculis tincidunt. Duis tempor nunc in sapien porta, ac tincidunt urna blandit. Nam sem lacus, rhoncus in dapibus eu, hendrerit sed tortor. Maecenas eleifend in enim sed facilisis.'
    },
    {
        'post_title': 'Headphone Multiplexor mk 2',
        'post_id': '5',
        'post_category': 'audio',
        'post_summary': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam auctor consequat vehicula. Etiam nec nisl eget sem pellentesque bibendum vitae et enim. Etiam vel nunc purus. In consequat euismod nisl eget porttitor. Aliquam blandit tincidunt enim ut imperdiet. Mauris pretium dolor euismod fermentum aliquam. Sed molestie facilisis hendrerit. Donec consequat ultricies lobortis. Vivamus bibendum at dolor quis efficitur. Duis quis risus ac ex tristique gravida vel gravida leo. Nulla venenatis ante eget iaculis tincidunt. Duis tempor nunc in sapien porta, ac tincidunt urna blandit. Nam sem lacus, rhoncus in dapibus eu, hendrerit sed tortor. Maecenas eleifend in enim sed facilisis.'
    },
    {
        'post_title': 'Personal Website',
        'post_id': '6',
        'post_category': 'web',
        'post_summary': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam auctor consequat vehicula. Etiam nec nisl eget sem pellentesque bibendum vitae et enim. Etiam vel nunc purus. In consequat euismod nisl eget porttitor. Aliquam blandit tincidunt enim ut imperdiet. Mauris pretium dolor euismod fermentum aliquam. Sed molestie facilisis hendrerit. Donec consequat ultricies lobortis. Vivamus bibendum at dolor quis efficitur. Duis quis risus ac ex tristique gravida vel gravida leo. Nulla venenatis ante eget iaculis tincidunt. Duis tempor nunc in sapien porta, ac tincidunt urna blandit. Nam sem lacus, rhoncus in dapibus eu, hendrerit sed tortor. Maecenas eleifend in enim sed facilisis.'
    }
];

export class PostRouter {
    public router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }

    init(): void {
        this.router.get('/', this.getAll);
        this.router.get('/:postId', this.getOne)
    }

    public getAll(req: Request, res: Response, next: NextFunction): void {
        res.send(POSTS);
    }

    public getOne(req: Request, res: Response, next: NextFunction): void {
        let index = Number(req.params.postId);
        res.send(POSTS[index]);
    }
}

const postRoutes = new PostRouter();
postRoutes.init();

export default postRoutes.router;