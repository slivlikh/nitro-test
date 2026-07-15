import {useSearchParams} from "react-router";
import {useProductsCategories} from "../../../shared/api";
import {assertNonNullable} from "../../../shared/utils/assertions";
import {Select} from "../../../UI";

const emptyOption = {
    label: 'Select category',
    value: '',
}

export const CategoryFilter = () => {
    const {data} = useProductsCategories()
    assertNonNullable(data)

    const option = data.map((category) => ({
        value: category,
        label: category,
    }))

    const [searchParams, setSearchParams] = useSearchParams();
    const category = searchParams.get('category')


    const handleChangeCategory = (category: string) => {
        if (!category) {
            searchParams.delete('category');
            setSearchParams(searchParams)
            return
        }

        searchParams.set('category', category);
        setSearchParams(searchParams)
    }

    return (
        <Select
            name='category-filter'
            onChange={(event) => handleChangeCategory(event.currentTarget.value)}
            options={[emptyOption, ...option]}
            value={category ?? ''}
        />
    )
}