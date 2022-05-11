import React from 'react'
import { Button, ContainerScreens } from '@components/index'
import { categories } from '@utils/index'
import { CategorySelectContainer, Icon, Name, Separator, Footer, FlatListContainer } from './styles'

interface Category {
  key: string
  name: string
}

interface Props {
  category: Category
  setCategory: (category: Category) => void
  closeSelectCategory: () => void
}

export const CategorySelect = ({ category, closeSelectCategory, setCategory }: Props) => {
  const handleCategorySelect = (item: Category) => {
    setCategory(item)
  }

  return (
    <ContainerScreens title="Categoria">
      <FlatListContainer
        data={categories}
        keyExtractor={(item) => String(item.key)}
        ItemSeparatorComponent={() => <Separator />}
        renderItem={({ item }) => (
          <CategorySelectContainer
            isActive={item.key === category.key}
            onPress={() => handleCategorySelect(item)}
            activeOpacity={0.7}
          >
            <Icon name={item.icon} isActive={item.key === category.key} />
            <Name isActive={item.key === category.key}>{item.name}</Name>
          </CategorySelectContainer>
        )}
      />

      <Footer>
        <Button title="Selecionar" onPress={closeSelectCategory} />
      </Footer>
    </ContainerScreens>
  )
}
